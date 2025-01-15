import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: isAnnual ? 49 : 59,
      features: [
        "Up to 5 AI models",
        "100,000 API calls/month",
        "Basic analytics",
        "Community support",
        "Standard security"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and businesses",
      price: isAnnual ? 99 : 119,
      popular: true,
      features: [
        "Up to 20 AI models",
        "1,000,000 API calls/month",
        "Advanced analytics",
        "Priority support",
        "Enhanced security",
        "Custom model training",
        "Team collaboration"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: "Custom",
      features: [
        "Unlimited AI models",
        "Custom API volume",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Enterprise security",
        "Custom model training",
        "Advanced collaboration",
        "On-premises deployment",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Choose the plan that best fits your needs. All plans include core platform features.
        </p>

        <div className="flex items-center justify-center space-x-4">
          <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            style={{ backgroundColor: isAnnual ? '#4F46E5' : '#94A3B8' }}
          >
            <span 
              className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              style={{ transform: `translateX(${isAnnual ? '24px' : '0'})` }}
            />
          </button>
          <span className={`text-lg ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
            Annual
            <span className="text-green-500 ml-2">Save 20%</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`bg-white rounded-xl shadow-lg p-8 ${
              plan.popular ? 'ring-2 ring-indigo-600 relative' : ''
            }`}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            )}
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="mb-6">
              {typeof plan.price === 'number' ? (
                <>
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </>
              ) : (
                <span className="text-4xl font-bold">Contact Us</span>
              )}
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to={plan.name === "Enterprise" ? "/contact" : "/signup"}
              className={`w-full text-center py-3 rounded-lg font-medium transition-colors ${
                plan.popular
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
              }`}
            >
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need a custom plan?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We offer custom solutions for organizations with specific requirements. 
          Contact our sales team to discuss your needs.
        </p>
        <Link 
          to="/contact" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-block"
        >
          Contact Sales
        </Link>
      </div>
    </main>
  );
}