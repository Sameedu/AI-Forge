import React, { useState } from 'react';
import { Sliders, Brain, Save, Play, Database, MessageSquare } from 'lucide-react';

export function Tuning() {
  const [selectedModel, setSelectedModel] = useState('1');
  const [showTrainingModal, setShowTrainingModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Model Fine-tuning</h1>
        <button
          onClick={() => setShowTrainingModal(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Brain className="w-5 h-5 mr-2" />
          Start Training
        </button>
      </div>

      {/* Model Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            id: '1',
            name: 'Customer Support v1.2',
            type: 'GPT-3.5',
            status: 'active',
            accuracy: '94.2%'
          },
          {
            id: '2',
            name: 'Sales Assistant v0.8',
            type: 'GPT-4',
            status: 'training',
            accuracy: '91.8%'
          },
          {
            id: '3',
            name: 'Data Analyzer v2.0',
            type: 'Custom',
            status: 'draft',
            accuracy: '88.5%'
          }
        ].map((model) => (
          <div
            key={model.id}
            onClick={() => setSelectedModel(model.id)}
            className={`bg-white rounded-xl p-6 cursor-pointer transition-shadow ${
              selectedModel === model.id
                ? 'ring-2 ring-indigo-600 shadow-md'
                : 'hover:shadow-md'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{model.name}</h3>
                <p className="text-sm text-gray-500">{model.type}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                model.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : model.status === 'training'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {model.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Accuracy</span>
              <span className="font-medium">{model.accuracy}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Training Configuration */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold mb-6">Training Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Base Model
            </label>
            <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
              <option>GPT-4</option>
              <option>GPT-3.5-turbo</option>
              <option>Custom Model</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Training Steps
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="1000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Learning Rate
            </label>
            <input
              type="number"
              step="0.0001"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="0.0001"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Batch Size
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="32"
            />
          </div>
        </div>
      </div>

      {/* Training Data */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold">Training Data</h2>
          <button className="text-indigo-600 hover:text-indigo-700 flex items-center">
            <Database className="w-4 h-4 mr-1" />
            Import Data
          </button>
        </div>
        <div className="space-y-4">
          {[
            { name: 'customer_conversations.jsonl', size: '2.4 MB', examples: 1250 },
            { name: 'support_tickets.jsonl', size: '1.8 MB', examples: 850 },
            { name: 'chat_logs.jsonl', size: '3.1 MB', examples: 1680 }
          ].map((file) => (
            <div key={file.name} className="flex justify-between items-center p-4 border rounded-lg">
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">
                  {file.size} • {file.examples} examples
                </p>
              </div>
              <button className="text-red-600 hover:text-red-700">Remove</button>
            </div>
          ))}
        </div>
      </div>

      {/* Training Modal */}
      {showTrainingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Start Training</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Model Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g., Customer Support v1.3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Describe the purpose of this training run..."
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setShowTrainingModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Start Training
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}