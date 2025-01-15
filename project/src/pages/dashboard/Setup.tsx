import React, { useState } from 'react';
import { Key, Database, Webhook, Plus, Trash2 } from 'lucide-react';

export function Setup() {
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: 'Production Key', key: 'sk-...', lastUsed: '2024-03-10' },
    { id: 2, name: 'Development Key', key: 'sk-...', lastUsed: '2024-03-09' },
  ]);

  const [webhooks, setWebhooks] = useState([
    { id: 1, url: 'https://api.example.com/webhook', events: ['agent.created', 'agent.updated'] },
  ]);

  const [showNewKeyForm, setShowNewKeyForm] = useState(false);
  const [showNewWebhookForm, setShowNewWebhookForm] = useState(false);

  const addApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    // Add API key logic
    setShowNewKeyForm(false);
  };

  const addWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    // Add webhook logic
    setShowNewWebhookForm(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Setup & API Keys</h1>
      </div>

      {/* API Keys Section */}
      <section className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Key className="w-5 h-5 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold">API Keys</h2>
          </div>
          <button
            onClick={() => setShowNewKeyForm(true)}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Key
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Key</th>
                <th className="text-left py-3 px-4">Last Used</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((key) => (
                <tr key={key.id} className="border-b">
                  <td className="py-3 px-4">{key.name}</td>
                  <td className="py-3 px-4 font-mono">{key.key}</td>
                  <td className="py-3 px-4">{key.lastUsed}</td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showNewKeyForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Create New API Key</h3>
              <form onSubmit={addApiKey} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Key Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g., Production Key"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowNewKeyForm(false)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Create Key
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Database Configuration */}
      <section className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-6">
          <Database className="w-5 h-5 text-indigo-600 mr-2" />
          <h2 className="text-lg font-semibold">Database Configuration</h2>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Database URL
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="postgres://username:password@host:port/database"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Connection Pool Size
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="5"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Save Configuration
          </button>
        </form>
      </section>

      {/* Webhooks */}
      <section className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Webhook className="w-5 h-5 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold">Webhooks</h2>
          </div>
          <button
            onClick={() => setShowNewWebhookForm(true)}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Webhook
          </button>
        </div>

        <div className="space-y-4">
          {webhooks.map((webhook) => (
            <div key={webhook.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-mono text-sm">{webhook.url}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {webhook.events.map((event) => (
                      <span
                        key={event}
                        className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {showNewWebhookForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Add Webhook</h3>
              <form onSubmit={addWebhook} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Webhook URL
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Events
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="ml-2">Agent Created</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="ml-2">Agent Updated</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="ml-2">Agent Deleted</span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowNewWebhookForm(false)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Add Webhook
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}