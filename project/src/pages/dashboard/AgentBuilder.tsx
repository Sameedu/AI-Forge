import React, { useState } from 'react';
import { 
  Bot, Save, Play, Plus, ArrowRight, Database, MessageSquare, 
  Mail, Globe, FileText, Webhook, Settings, Trash2 
} from 'lucide-react';

interface NodeType {
  id: string;
  type: string;
  title: string;
  icon: React.ElementType;
  inputs?: string[];
  outputs?: string[];
  config?: Record<string, any>;
}

interface Position {
  x: number;
  y: number;
}

interface Node extends NodeType {
  position: Position;
}

export function AgentBuilder() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodeTypes: NodeType[] = [
    { 
      id: 'input', 
      type: 'trigger', 
      title: 'Input Trigger',
      icon: MessageSquare,
      outputs: ['output']
    },
    { 
      id: 'email', 
      type: 'action', 
      title: 'Email Handler',
      icon: Mail,
      inputs: ['input'],
      outputs: ['output']
    },
    { 
      id: 'api', 
      type: 'action', 
      title: 'API Request',
      icon: Globe,
      inputs: ['input'],
      outputs: ['success', 'error']
    },
    { 
      id: 'database', 
      type: 'action', 
      title: 'Database Query',
      icon: Database,
      inputs: ['input'],
      outputs: ['output']
    }
  ];

  const handleDragStart = (nodeId: string) => {
    setDraggingNode(nodeId);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggingNode) {
      const nodeType = nodeTypes.find(n => n.id === draggingNode);
      if (nodeType) {
        const newNode: Node = {
          ...nodeType,
          id: `${nodeType.id}-${Date.now()}`,
          position: {
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
          }
        };
        setNodes([...nodes, newNode]);
      }
    }
    setDraggingNode(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Left Sidebar - Node Types */}
      <div className="w-64 bg-white border-r p-4">
        <h2 className="text-lg font-semibold mb-4">Components</h2>
        <div className="space-y-2">
          {nodeTypes.map((nodeType) => (
            <div
              key={nodeType.id}
              draggable
              onDragStart={() => handleDragStart(nodeType.id)}
              className="flex items-center p-3 bg-white border rounded-lg cursor-move hover:shadow-md transition-shadow"
            >
              <nodeType.icon className="w-5 h-5 text-indigo-600 mr-3" />
              <span>{nodeType.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 bg-gray-50">
        {/* Toolbar */}
        <div className="bg-white border-b px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Plus className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Save className="w-5 h-5" />
            </button>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center">
            <Play className="w-5 h-5 mr-2" />
            Deploy Agent
          </button>
        </div>

        {/* Canvas Area */}
        <div
          className="h-full p-4 overflow-auto"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {/* Grid Background */}
          <div className="w-full h-full grid-pattern relative">
            {nodes.map((node) => (
              <div
                key={node.id}
                className="absolute bg-white rounded-lg shadow-md p-4"
                style={{
                  left: node.position.x,
                  top: node.position.y,
                  width: '200px'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <node.icon className="w-5 h-5 text-indigo-600 mr-2" />
                    <span className="font-medium">{node.title}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setNodes(nodes.filter(n => n.id !== node.id));
                    }}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                {node.inputs && (
                  <div className="mb-2">
                    {node.inputs.map(input => (
                      <div key={input} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                        {input}
                      </div>
                    ))}
                  </div>
                )}
                {node.outputs && (
                  <div>
                    {node.outputs.map(output => (
                      <div key={output} className="flex items-center justify-end text-sm text-gray-600">
                        {output}
                        <div className="w-2 h-2 bg-green-600 rounded-full ml-2" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Node Configuration */}
      <div className="w-64 bg-white border-l">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Configuration</h2>
          {selectedNode ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Node Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Settings
                </label>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between p-2 text-left border rounded-lg hover:bg-gray-50">
                    <span className="flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="w-full flex items-center justify-between p-2 text-left border rounded-lg hover:bg-gray-50">
                    <span className="flex items-center">
                      <Webhook className="w-4 h-4 mr-2" />
                      Webhooks
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              Select a node to configure its settings
            </p>
          )}
        </div>
      </div>
    </div>
  );
}