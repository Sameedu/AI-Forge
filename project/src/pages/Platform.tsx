import React from 'react';
import { Link } from 'react-router-dom';
import { Workflow, Bot, Cpu, Network } from 'lucide-react';

export function Platform() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Platform Overview</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our comprehensive platform provides everything you need to build, train, and deploy AI solutions at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Workflow className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Visual Workflow Builder</h2>
          <p className="text-gray-600 mb-6">
            Create complex AI workflows using our intuitive drag-and-drop interface. Connect data sources, 
            processing steps, and model endpoints without writing code.
          </p>
          <Link 
            to="/platform/workflows" 
            className="text-indigo-600 font-medium hover:text-indigo-700"
          >
            Learn more about workflows →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Bot className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Pre-trained Models</h2>
          <p className="text-gray-600 mb-6">
            Access our library of pre-trained models for common tasks like text analysis, 
            image recognition, and predictive analytics.
          </p>
          <Link 
            to="/platform/models" 
            className="text-indigo-600 font-medium hover:text-indigo-700"
          >
            Explore model library →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Cpu className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">AutoML Training</h2>
          <p className="text-gray-600 mb-6">
            Automatically train and optimize models using our advanced AutoML capabilities. 
            Let our platform find the best architecture for your data.
          </p>
          <Link 
            to="/platform/automl" 
            className="text-indigo-600 font-medium hover:text-indigo-700"
          >
            Discover AutoML →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Network className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Deployment Options</h2>
          <p className="text-gray-600 mb-6">
            Deploy your models anywhere - cloud, on-premises, or edge devices. 
            Monitor performance and scale automatically.
          </p>
          <Link 
            to="/platform/deployment" 
            className="text-indigo-600 font-medium hover:text-indigo-700"
          >
            View deployment options →
          </Link>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Sign up for a free trial and start building your first AI solution today. 
          No credit card required.
        </p>
        <Link 
          to="/signup" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-block"
        >
          Start Free Trial
        </Link>
      </div>
    </main>
  );
}