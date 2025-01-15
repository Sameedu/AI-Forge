import React, { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Bot, Trash2, Edit3, Play, Pause } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'draft';
  type: string;
  lastModified: string;
  tools: string[];
}

export function Projects() {
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: '1',
      name: 'Customer Support Agent',
      description: 'Handles customer inquiries and support tickets',
      status: 'active',
      type: 'Support',
      lastModified: '2024-03-10',
      tools: ['Email', 'Knowledge Base', 'Ticket System']
    },
    {
      id: '2',
      name: 'Data Analysis Agent',
      description: 'Processes and analyzes business metrics',
      status: 'paused',
      type: 'Analytics',
      lastModified: '2024-03-09',
      tools: ['Database', 'Visualization', 'Reporting']
    }
  ]);

  const [showNewAgentModal, setShowNewAgentModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const agentTypes = ['Support', 'Analytics', 'Sales', 'Development', 'Operations'];

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || agent.type === selectedType;
    return matchesSearch && matchesType;
  });

  const toggleAgentStatus = (agentId: string) => {
    setAgents(agents.map(agent => {
      if (agent.id === agentId) {
        return {
          ...agent,
          status: agent.status === 'active' ? 'paused' : 'active'
        };
      }
      return agent;
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">AI Agents</h1>
        <button
          onClick={() => setShowNewAgentModal(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Agent
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search agents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="pl-10 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 appearance-none bg-white"
          >
            <option value="all">All Types</option>
            {agentTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <Bot className="w-8 h-8 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-lg">{agent.name}</h3>
                  <p className="text-sm text-gray-500">{agent.type}</p>
                </div>
              </div>
              <div className="relative group">
                <button className="p-1 rounded-lg hover:bg-gray-100">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Agent
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center">
                    <Trash2 className="w-4 h-4 mr-2 text-red-500" />
                    Delete Agent
                  </button>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{agent.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {agent.tools.map((tool) => (
                <span key={tool} className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs">
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-sm text-gray-500">
                Modified {agent.lastModified}
              </span>
              <button
                onClick={() => toggleAgentStatus(agent.id)}
                className={`p-2 rounded-lg ${
                  agent.status === 'active'
                    ? 'text-green-600 hover:bg-green-50'
                    : 'text-gray-400 hover:bg-gray-50'
                }`}
              >
                {agent.status === 'active' ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* New Agent Modal */}
      {showNewAgentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Create New AI Agent</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Agent Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g., Customer Support Assistant"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Describe what this agent does..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Agent Type
                </label>
                <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
                  {agentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tools & Capabilities
                </label>
                <div className="space-y-2">
                  {['Email Integration', 'Database Access', 'API Calls', 'File Processing'].map((tool) => (
                    <label key={tool} className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600 mr-2" />
                      {tool}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNewAgentModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Create Agent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}