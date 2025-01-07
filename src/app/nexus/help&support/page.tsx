'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar/page';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';

export default function HelpAndSupportPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-grow">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow">
            <div className="container mx-auto px-6 py-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Help & Support</h1>

              {/* Search Section */}
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Search for help topics..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              {/* Documentation Section */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Documentation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <a
                    href="/getting-started"
                    className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Getting Started</h3>
                    <p className="text-sm text-gray-600">Learn the basics of using the dashboard.</p>
                  </a>
                  <a
                    href="/features"
                    className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Features</h3>
                    <p className="text-sm text-gray-600">Explore all the tools and features available.</p>
                  </a>
                  <a
                    href="/settings"
                    className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Account Settings</h3>
                    <p className="text-sm text-gray-600">Manage your account and preferences.</p>
                  </a>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">FAQs</h2>
                <div className="space-y-4">
                  {[
                    { question: 'How do I reset my password?', answer: 'Go to Profile Settings and click "Reset Password".' },
                    { question: 'How do I contact support?', answer: 'Click the "Contact Support" button below.' },
                    { question: 'Can I update my profile information?', answer: 'Yes, visit the Profile Settings page.' },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md transition hover:shadow-lg"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span className="font-semibold text-gray-800">{faq.question}</span>
                        <span className="text-gray-500">
                          {faqOpen === index ? '-' : '+'}
                        </span>
                      </button>
                      {faqOpen === index && (
                        <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Support Section */}
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Support</h2>
                <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                  >
                    Submit
                  </button>
                </form>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
