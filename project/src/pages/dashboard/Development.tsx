import React, { useState } from 'react';
import { Code, Settings, Play, Save, Plus, Trash2 } from 'lucide-react';

export function Development() {
  const [selectedAgent, setSelectedAgent] = useState('1');
  const [activeTab, setActiveTab] = useState('code');

  const agents = [
    { id: '1', name: 'Customer Support Agent' },
    { id: '2', name: 'Data Analysis Agent' }
  ];

  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="flex h-full">
        {/* Left Sidebar - Agent Selection */}
        <div className="w-64 bg-white border-r">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Agents</h2>
            <div className="space-y-2">
              {agents.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg ${
                    selectedAgent === agent.id
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {agent.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Development Area */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="bg-white border-b px-4 py-2 flex justify-between items-center">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('code')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'code'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Code className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'settings'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center">
                <Save className="w-5 h-5 mr-2" />
                Save
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Deploy
              </button>
            </div>
          </div>

          {/* Code Editor Area */}
          {activeTab === 'code' && (
            <div className="flex-1 bg-gray-50 p-4">
              <div className="bg-white rounded-lg shadow-sm h-full p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Agent Logic</h3>
                  <button className="text-indigo-600 hover:text-indigo-700 flex items-center">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Function
                  </button>
                </div>
                <div className="border rounded-lg p-4 mb-4">
                  <pre className="text-sm font-mono">
{`async function handleCustomerInquiry(message) {
  // Analyze message intent
  const intent = await analyzeIntent(message);
  
  // Generate appropriate response
  const response = await generateResponse(intent);
  
  return response;
}`}
                  </pre>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Available Tools</h4>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {['Email API', 'Knowledge Base', 'Ticket System'].map((tool) => (
                      <div key={tool} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                        <span>{tool}</span>
                        <button className="text-gray-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Area */}
          {activeTab === 'settings' && (
            <div className="flex-1 bg-gray-50 p-4">
              <div className="bg-white rounded-lg shadow-sm h-full p-6">
                <h3 className="font-semibold mb-6">Agent Settings</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Model Selection
                    </label>
                    <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>GPT-4</option>
                      <option>GPT-3.5-turbo</option>
                      <option>Custom Model</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Temperature
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Precise</span>
                      <span>Creative</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Maximum Response Length
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="2000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rate Limiting
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="number"
                        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                        placeholder="Requests"
                      />
                      <select className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
                        <option>per minute</option>
                        <option>per hour</option>
                        <option>per day</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600 mr-2" />
                      Enable logging
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}