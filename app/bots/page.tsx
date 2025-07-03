<<<<<<< HEAD
// Refactored Bots Page to match Resume Page Style
'use client'

import { useState } from 'react';
=======
'use client';

import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
>>>>>>> f131f8f (Update portfolio layout, fixes for mobile and modal interaction)

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
<<<<<<< HEAD
=======
      codeSections: [
        {
          title: '🔧 Imports and Setup',
          code: `from playwright.sync_api import sync_playwright
import pandas as pd
from datetime import datetime
import time`,
        },
        {
          title: '📅 is_date_in_range',
          code: `def is_date_in_range(date_str, start_date, end_date):
    """Checks if an order date is within the given date range"""
    date_format = "%d %b %Y"
    order_date = datetime.strptime(date_str, date_format)
    start_date = datetime.strptime(start_date, date_format)
    end_date = datetime.strptime(end_date, date_format)
    return start_date <= order_date <= end_date`,
        },
        {
          title: '🕸️ scrape_orders',
          code: `def scrape_test(start_date, end_date):
    """Scrapes test order history and extracts order details"""
    print("🚀 Starting Playwright Scraper...")

    with sync_playwright() as p:
        print("✅ Launching browser with saved Chrome profile...")

        browser = p.chromium.launch_persistent_context(
            user_data_dir="C:\\Users\\TruePrav\\AppData\\Local\\Google\\Chrome\\User Data",
            args=["--profile-directory=Profile 4"],
            headless=False  # Show browser for debugging
        )
        page = browser.new_page()

        order_data = []
        page_num = 1  # Start from page 1
        stop_scraping = False  # Flag to stop pagination

        while not stop_scraping:
            print(f"🌎 Navigating to test orders page {page_num}...")
            url = f"https://www.test.com/en/account/purchase?page={page_num}"
            page.goto(url, timeout=90000)

            try:
                page.wait_for_selector(".history__row", timeout=30000)
            except Exception as e:
                print(f"⚠️ No more pages found. Stopping scraper.")
                break

            orders = page.locator(".history__row").all()
            if len(orders) == 0:
                print(f"❌ No orders found on page {page_num}. Stopping scraper.")
                break  # No more orders, stop looping

            print(f"📌 Found {len(orders)} orders on page {page_num}.")

            for index, order in enumerate(orders):
                print(f"🔍 Extracting order {index + 1}/{len(orders)}...")

                try:
                    date = order.locator(".history__col .history__holder-col--descr").first.inner_text().strip()

                    # Stop scraping immediately if the order date is older than the start date
                    if datetime.strptime(date, "%d %b %Y") < datetime.strptime(start_date, "%d %b %Y"):
                        print(f"❌ Order date {date} is older than start date {start_date}. Stopping scraper.")
                        stop_scraping = True  # Set flag to stop pagination
                        break  # Exit order loop immediately

                    order_number_element = order.locator(".history__link").first
                    order_number = order_number_element.inner_text().strip()
                    status = order.locator(".history__status").first.inner_text().strip()
                    amount = order.locator(".history__col--align .history__holder-col--descr").first.inner_text().strip()

                    print(f"📦 Order Found: {date}, {order_number}, {status}, {amount}")

                    # Navigate to the order details page via URL
                    order_details_url = f"https://www.test.com/en/account/purchase/order/{order_number}"
                    page.goto(order_details_url, timeout=90000)

                    # Wait for the product table to load
                    try:
                        page.wait_for_selector("td.product-nomenclature__table-product", timeout=10000)
                        product_name = page.locator("td.product-nomenclature__table-product").first.inner_text().strip()
                        qty = page.locator("td[data-heading='Qty']").first.inner_text().strip()
                    except Exception as e:
                        print(f"⚠️ Could not extract product details for order {order_number}. Skipping.")
                        product_name, qty = "N/A", "N/A"

                    print(f"📦 Product: {product_name}, QTY: {qty}")

                    # Store extracted data
                    if is_date_in_range(date, start_date, end_date):
                        order_data.append([date, order_number, status, amount, product_name, qty])

                    # Go back to the main order page
                    page.goto(url, timeout=90000)
                    page.wait_for_selector(".history__row", timeout=30000)

                except Exception as e:
                    print(f"⚠️ Error extracting order {index + 1}: {e}")
                    continue  # Skip to the next order

            # If an out-of-range order was found, stop paginating
            if stop_scraping:
                break

            page_num += 1  # Move to the next page

        browser.close()
    return order_data`,
        },
        {
          title: '💾 save_to_csv',
          code: `def save_to_csv(data, filename="orders.csv"):
    if data:
        df = pd.DataFrame(data, columns=["Date", "Order #", "Status", "Amount", "Product", "QTY"])
        df.to_csv(filename, index=False)
        print(f"✅ Data saved to {filename}")
    else:
        print("⚠️ No data to save!")`,
        },
        {
          title: '📊 save_to_excel',
          code: `def save_to_excel(data, filename="orders.xlsx"):
    if data:
        df = pd.DataFrame(data, columns=["Date", "Order #", "Status", "Amount", "Product", "QTY"])
        df.to_excel(filename, index=False)
        print(f"✅ Data saved to {filename}")
    else:
        print("⚠️ No data to save!")`,
        },
        {
          title: '🚀 Run Script',
          code: `start_date = input("Enter start date (e.g., 26 Feb 2025): ")
end_date = input("Enter end date (e.g., 27 Feb 2025): ")
scraped_data = scrape_test(start_date, end_date)
if scraped_data:
    save_to_csv(scraped_data)
    save_to_excel(scraped_data)
    print("🎉 Scraping completed successfully!")
else:
    print("❌ No orders found in the specified date range.")`,
        },
      ],
>>>>>>> f131f8f (Update portfolio layout, fixes for mobile and modal interaction)
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
<<<<<<< HEAD
    },
=======
      codeSections: [
        {
          title: '📅 Calendar Auto-Blocker Script',
          code: `function onFormSubmit(e) {
  const calendar = CalendarApp.getCalendarById("@group.calendar.google.com");
  const name = e.namedValues["Name"]?.[0];
  const email = e.namedValues["Email"]?.[0];
  const startDateRaw = e.namedValues["Start Date"]?.[0];
  const endDateRaw = e.namedValues["End Date"]?.[0];
  if (!name || !email || !startDateRaw || !endDateRaw) return;
  const startDate = new Date(startDateRaw);
  const endDate = new Date(endDateRaw);
  endDate.setDate(endDate.getDate() + 1);
  const events = calendar.getEvents(startDate, endDate);
  if (events.length > 0) {
    MailApp.sendEmail({
      to: email,
      subject: "Booking Conflict",
      body: \`Hi \${name},\\n\\nYour requested dates overlap with an existing booking.\`
    });
    return;
  }
  for (let date = new Date(startDate); date < endDate; date.setDate(date.getDate() + 1)) {
    calendar.createEvent(\`Booked by ${name}\`, new Date(date).setHours(0), new Date(date).setHours(23));
  }
  MailApp.sendEmail({
    to: email,
    subject: "Booking Confirmed",
    body: \`Hi ${name},\n\nYour booking has been confirmed.\`
  });
}`
        },
        {
          title: '📈 Daily Digital Sales Tracker',
          code: `function duplicateSheetDaily() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "MMM-dd-yyyy");
  var templateSheet = ss.getSheetByName("TEMPLATE");
  if (!templateSheet) throw new Error('Sheet named "TEMPLATE" not found.');
  var newSheet = templateSheet.copyTo(ss);
  newSheet.setName(today);
  var dateColumn = newSheet.getRange("A2:A50");
  var dateValue = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "MM/dd/yy");
  dateColumn.setValues(Array(dateColumn.getNumRows()).fill([dateValue]));
  var onesColumn = newSheet.getRange("H2:H50");
  onesColumn.setValues(Array(onesColumn.getNumRows()).fill([1]));
  ss.setActiveSheet(newSheet);
  ss.moveActiveSheet(1);
}`
        }
      ]
    }
>>>>>>> f131f8f (Update portfolio layout, fixes for mobile and modal interaction)
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
<<<<<<< HEAD
                  <div className="flex flex-wrap gap-2">
                    {bot.tech.map((tech, i) => (
                      <span key={i} className="status-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
=======
                  <div className="flex flex-wrap gap-2 mb-4">
                    {bot.tech.map((tech, i) => (
                      <span key={i} className="status-badge">{tech}</span>
                    ))}
                  </div>

                  {/* Main Show Code Button */}
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-accent text-white rounded hover:opacity-90 transition">
                          <ChevronUpIcon className={`w-4 h-4 transform transition-transform ${open ? 'rotate-180' : ''}`} />
                          {open ? 'Hide Code' : 'Show Code'}
                        </Disclosure.Button>

                        <Disclosure.Panel className="mt-4 space-y-4">
                          {bot.codeSections.map((section, idx) => (
                            <Disclosure key={idx}>
                              {({ open: innerOpen }) => (
                                <>
                                  <Disclosure.Button className="w-full flex justify-between items-center bg-orange-600 text-white px-4 py-2 rounded-md">
                                    <span>{section.title}</span>
                                    <ChevronUpIcon
                                      className={`w-4 h-4 transform transition-transform ${innerOpen ? 'rotate-180' : ''}`}
                                    />
                                  </Disclosure.Button>
                                  <Disclosure.Panel className="bg-neutral-800 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                                    <code>{section.code}</code>
                                  </Disclosure.Panel>
                                  
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
>>>>>>> f131f8f (Update portfolio layout, fixes for mobile and modal interaction)
                </div>
              </div>
            </div>
          </div>
        ))}
<<<<<<< HEAD
      </div>

      <div className="mt-12 text-center">
=======
        <div className="mt-12 text-center">
>>>>>>> f131f8f (Update portfolio layout, fixes for mobile and modal interaction)
        <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
          More coming soon...
        </button>
      </div>
<<<<<<< HEAD
    </div>
=======
      </div>
    </div>
    
>>>>>>> f131f8f (Update portfolio layout, fixes for mobile and modal interaction)
  );
}
