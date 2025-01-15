import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Organizations Through Automation
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We're on a mission to make intelligent automation accessible to every organization.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                At AIForge, we believe that automation should be accessible, intuitive, and powerful. 
                We're building the tools that enable organizations to transform their operations and 
                focus on what truly matters.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Democratizing automation technology</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Empowering teams to work smarter</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Driving innovation through AI</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm">Organizations Automated</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover-scale">
              <Zap className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We're constantly pushing the boundaries of what's possible with automation technology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-scale">
              <Users className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teams working together to achieve extraordinary results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-scale">
              <Award className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from code to customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Michael Rodriguez",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Emily Thompson",
                role: "Head of Product",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "David Kim",
                role: "Head of Engineering",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
              }
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}