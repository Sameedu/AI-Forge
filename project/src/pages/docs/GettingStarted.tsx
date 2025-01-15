import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Code, Terminal, Zap } from 'lucide-react';

export function GettingStarted() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8">Getting Started with AIForge</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Book className="w-6 h-6 mr-2 text-indigo-600" />
            Quick Start Guide
          </h2>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">1</span>
              <div>
                <h3 className="font-semibold">Create an Account</h3>
                <p className="text-gray-600">Sign up for a free account to get started with AIForge.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">2</span>
              <div>
                <h3 className="font-semibold">Create Your First Project</h3>
                <p className="text-gray-600">Set up a new automation project using our intuitive interface.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">3</span>
              <div>
                <h3 className="font-semibold">Design Your Workflow</h3>
                <p className="text-gray-600">Use our drag-and-drop builder to create your automation workflow.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">4</span>
              <div>
                <h3 className="font-semibold">Deploy and Monitor</h3>
                <p className="text-gray-600">Launch your automation and track its performance in real-time.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover-scale">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Code className="w-6 h-6 mr-2 text-indigo-600" />
              API Integration
            </h2>
            <p className="text-gray-600 mb-4">
              Connect your existing systems using our comprehensive API endpoints.
            </p>
            <Link to="/docs/api" className="text-indigo-600 hover:text-indigo-700 font-medium">
              View API Documentation →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover-scale">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Terminal className="w-6 h-6 mr-2 text-indigo-600" />
              CLI Tools
            </h2>
            <p className="text-gray-600 mb-4">
              Automate deployments and manage workflows using our command-line tools.
            </p>
            <Link to="/docs/cli" className="text-indigo-600 hover:text-indigo-700 font-medium">
              CLI Documentation →
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2" />
            Ready to Build?
          </h2>
          <p className="mb-6">
            Start creating powerful automations with our intuitive platform.
          </p>
          <Link 
            to="/signup" 
            className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors inline-block font-medium"
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  );
}