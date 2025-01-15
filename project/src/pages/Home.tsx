import React from 'react';
import { Link } from 'react-router-dom';
import { Workflow, Cog, Zap, ChevronRight, Github, Bot, Gauge } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-12 h-12 text-indigo-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Generate and Deploy Automations at Scale
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your organization with intelligent automation. Design, test, and deploy 
            automated workflows without writing code. From simple tasks to complex processes.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/signup" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
            >
              Start Automating
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="https://github.com/aiforge/automations" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Workflow}
            title="Visual Workflow Builder"
            description="Create complex automations using our drag-and-drop interface. No coding required."
          />
          <FeatureCard 
            icon={Bot}
            title="Smart Triggers"
            description="Set up event-based or scheduled triggers to start your automations automatically."
          />
          <FeatureCard 
            icon={Cog}
            title="Process Integration"
            description="Connect to your existing tools and systems with our pre-built integrations."
          />
          <FeatureCard 
            icon={Gauge}
            title="Performance Monitoring"
            description="Track automation performance with real-time analytics and alerts."
          />
          <FeatureCard 
            icon={Bot}
            title="Error Handling"
            description="Built-in error recovery and fallback options for reliable automation."
          />
          <FeatureCard 
            icon={Zap}
            title="Instant Deployment"
            description="Deploy automations to production with one click and scale automatically."
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Workflows?</h2>
            <p className="text-lg text-indigo-100 mb-8">
              Join organizations already saving thousands of hours with our automation platform.
            </p>
            <Link 
              to="/signup" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors inline-block"
            >
              Start Building Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}