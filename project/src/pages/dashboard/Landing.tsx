import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap, Code, Users, Plus, ArrowRight } from 'lucide-react';

export function Landing() {
  const quickActions = [
    {
      icon: Bot,
      title: 'Create New Agent',
      description: 'Build a custom AI agent from scratch',
      link: '/dashboard/projects',
      color: 'bg-indigo-500'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Continue working on existing agents',
      link: '/dashboard/development',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Team Settings',
      description: 'Manage team members and permissions',
      link: '/dashboard/settings',
      color: 'bg-purple-500'
    }
  ];

  const recentAgents = [
    {
      name: 'Customer Support Agent',
      status: 'active',
      requests: '1.2k',
      lastModified: '2h ago'
    },
    {
      name: 'Data Analysis Agent',
      status: 'paused',
      requests: '856',
      lastModified: '1d ago'
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          New Agent
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action) => (
          <Link
            key={action.title}
            to={action.link}
            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">{action.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{action.description}</p>
            <div className="flex items-center text-indigo-600">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Agents */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b">
          <h2 className="font-semibold">Recent Agents</h2>
        </div>
        <div className="divide-y">
          {recentAgents.map((agent) => (
            <div key={agent.name} className="p-6 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center">
                <Bot className="w-8 h-8 text-indigo-600 mr-4" />
                <div>
                  <h3 className="font-medium">{agent.name}</h3>
                  <p className="text-sm text-gray-500">Modified {agent.lastModified}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-sm font-medium">{agent.requests}</p>
                  <p className="text-xs text-gray-500">requests today</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  agent.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {agent.status}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            {[
              { name: 'API Latency', value: '124ms', status: 'normal' },
              { name: 'Error Rate', value: '0.12%', status: 'normal' },
              { name: 'System Load', value: '42%', status: 'high' }
            ].map((metric) => (
              <div key={metric.name} className="flex items-center justify-between">
                <span className="text-gray-600">{metric.name}</span>
                <div className="flex items-center">
                  <span className="font-medium mr-2">{metric.value}</span>
                  <span className={`w-2 h-2 rounded-full ${
                    metric.status === 'normal' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Total Agents', value: '12' },
              { label: 'Active Deployments', value: '8' },
              { label: 'Total Requests', value: '45.2k' },
              { label: 'Avg Response Time', value: '156ms' }
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}