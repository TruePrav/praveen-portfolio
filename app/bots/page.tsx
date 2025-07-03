// Refactored Bots Page to match Resume Page Style
'use client'

import { useState } from 'react';

export default function Bots() {
  const bots = [
    {
      name: 'PLAY Barbados (Infinite Technology) Scraper Bot',
      description: 'Automated digital product purchase tracker and reconciliation system',
      features: [
        'Scrapes purchase history from vendor website based on custom date range',
        'Exports structured order data to Excel for easy reconciliation',
        'Captures product details, quantities, status, and payment info',
        'Enables streamlined financial reporting and audit readiness',
      ],
      status: 'Live & Maintained',
      tech: ['Python', 'Playwright', 'pandas', 'Chromium', 'CSV Export', 'Excel Export', 'Browser Automation'],
    },
    {
      name: 'Google Workspace Automation Tools',
      description: 'Internal tools built with Google Apps Script to automate tasks and streamline operations.',
      features: [
        'Daily Digital Sales Tracker: Categorizes and auto-generates sales log in Google Sheets, reducing manual entry',
        'Calendar Auto-Blocker: Syncs form responses to Google Calendar to prevent double bookings',
        'Automated categorization and sheet regeneration for efficient reporting and tracking',
      ],
      status: 'Live & Maintained',
      tech: ['Google Apps Script', 'Google Sheets', 'Google Forms', 'Google Calendar', 'Workflow Automation'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mt-16 text-4xl md:text-5xl font-bold text-white mb-10">
        Bots & Automation Projects
      </h1>

      <div className="space-y-12">
        {bots.map((bot, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-accent/20" />
            <div className="absolute left-0 top-1/2 w-3 h-3 bg-accent rounded-full -mt-1.5" />

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-heading font-bold text-text-primary">{bot.name}</h2>
                <span className="text-sm text-text-secondary">{bot.status}</span>
              </div>
              <h3 className="text-text-primary">{bot.description}</h3>

              <div className="bg-neutral-900 text-white p-4 rounded-md shadow-sm">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Features</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    {bot.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-sm mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {bot.tech.map((tech, i) => (
                      <span key={i} className="status-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
          More coming soon...
        </button>
      </div>
    </div>
  );
}
