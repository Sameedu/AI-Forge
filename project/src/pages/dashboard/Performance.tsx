import React, { useState } from 'react';
import { BarChart, LineChart, Activity, Clock, Users, MessageSquare, AlertCircle } from 'lucide-react';

export function Performance() {
  const [timeRange, setTimeRange] = useState('24h');
  const [selectedMetric, setSelectedMetric] = useState('requests');

  const metrics = [
    {
      name: 'Total Requests',
      value: '1.2M',
      change: '+12.3%',
      trend: 'up'
    },
    {
      name: 'Response Time',
      value: '245ms',
      change: '-5.2%',
      trend: 'down'
    },
    {
      name: 'Active Users',
      value: '3.4K',
      change: '+8.1%',
      trend: 'up'
    },
    {
      name: 'Error Rate',
      value: '0.12%',
      change: '-2.3%',
      trend: 'down'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Performance Analytics</h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="24h">Last 24 Hours</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-500">{metric.name}</h3>
              {metric.name === 'Total Requests' && <Activity className="w-5 h-5 text-indigo-600" />}
              {metric.name === 'Response Time' && <Clock className="w-5 h-5 text-indigo-600" />}
              {metric.name === 'Active Users' && <Users className="w-5 h-5 text-indigo-600" />}
              {metric.name === 'Error Rate' && <AlertCircle className="w-5 h-5 text-indigo-600" />}
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold">{metric.value}</p>
              <span className={`ml-2 text-sm ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold">Performance Overview</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedMetric('requests')}
              className={`px-3 py-1 rounded-lg ${
                selectedMetric === 'requests'
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Requests
            </button>
            <button
              onClick={() => setSelectedMetric('latency')}
              className={`px-3 py-1 rounded-lg ${
                selectedMetric === 'latency'
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Latency
            </button>
          </div>
        </div>
        <div className="h-80 flex items-center justify-center border rounded-lg">
          {/* Placeholder for actual chart implementation */}
          <LineChart className="w-12 h-12 text-gray-400" />
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Response Distribution</h3>
          <div className="h-64 flex items-center justify-center border rounded-lg">
            <BarChart className="w-12 h-12 text-gray-400" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Error Analysis</h3>
          <div className="space-y-4">
            {[
              { type: 'Rate Limit Exceeded', count: 45, percentage: 35 },
              { type: 'Invalid Input', count: 32, percentage: 25 },
              { type: 'Timeout', count: 28, percentage: 22 },
              { type: 'Other', count: 23, percentage: 18 }
            ].map((error) => (
              <div key={error.type}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{error.type}</span>
                  <span className="text-gray-500">{error.count} occurrences</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${error.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}