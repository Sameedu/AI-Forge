import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Database, Clock, Users, Receipt } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: FileText,
      title: "Document Processing",
      description: "Automate document workflows, data extraction, and approval processes.",
      link: "/solutions/document-automation"
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Streamline email communications, responses, and follow-ups automatically.",
      link: "/solutions/email-automation"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Automate data synchronization between different systems and databases.",
      link: "/solutions/data-integration"
    },
    {
      icon: Clock,
      title: "Scheduled Tasks",
      description: "Set up recurring tasks and batch processes with smart scheduling.",
      link: "/solutions/scheduled-tasks"
    },
    {
      icon: Users,
      title: "HR Processes",
      description: "Automate onboarding, time tracking, and employee documentation.",
      link: "/solutions/hr-automation"
    },
    {
      icon: Receipt,
      title: "Finance & Billing",
      description: "Streamline invoicing, payments, and financial reporting processes.",
      link: "/solutions/finance-automation"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Automation Solutions for Every Department</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how our automation platform can transform your workflows and eliminate repetitive tasks 
          across your organization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {solutions.map((solution) => (
          <div key={solution.title} className="bg-white p-8 rounded-xl shadow-lg">
            <solution.icon className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">{solution.title}</h2>
            <p className="text-gray-600 mb-6">{solution.description}</p>
            <Link 
              to={solution.link} 
              className="text-indigo-600 font-medium hover:text-indigo-700"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Automation Solution?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our automation experts can help you identify and implement the perfect automation strategy for your organization.
        </p>
        <Link 
          to="/contact" 
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors inline-block font-medium"
        >
          Schedule a Consultation
        </Link>
      </div>
    </main>
  );
}