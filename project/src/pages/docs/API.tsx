import React from 'react';
import { Code, Copy } from 'lucide-react';

export function API() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">API Documentation</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
          <p className="text-gray-600 mb-4">
            All API requests must include your API key in the Authorization header.
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 relative">
            <button 
              onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY')}
              className="absolute top-2 right-2 p-2 hover:bg-gray-700 rounded"
            >
              <Copy className="w-4 h-4" />
            </button>
            <code>Authorization: Bearer YOUR_API_KEY</code>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Code className="w-5 h-5 mr-2 text-indigo-600" />
                Create Workflow
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">POST /api/v1/workflows</code>
              </div>
              <p className="text-gray-600 mb-2">Create a new automation workflow.</p>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm">
                <pre>{`{
  "name": "My Workflow",
  "description": "Process incoming emails",
  "triggers": [...],
  "actions": [...]
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Code className="w-5 h-5 mr-2 text-indigo-600" />
                List Workflows
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">GET /api/v1/workflows</code>
              </div>
              <p className="text-gray-600">Retrieve all workflows for your account.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Code className="w-5 h-5 mr-2 text-indigo-600" />
                Get Workflow Status
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">GET /api/v1/workflows/:id/status</code>
              </div>
              <p className="text-gray-600">Get the current status and metrics for a workflow.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Rate Limits</h2>
          <div className="prose prose-indigo">
            <ul className="list-disc list-inside text-gray-600">
              <li>Free tier: 1000 requests per hour</li>
              <li>Pro tier: 10000 requests per hour</li>
              <li>Enterprise tier: Custom limits</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}