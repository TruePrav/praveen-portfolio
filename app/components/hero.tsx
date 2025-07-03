'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContact = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 sm:pt-40 animate-fade-in">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center md:justify-items-start">
          {/* Left Column - Text */}
          <div className="space-y-6 text-center md:text-left md:items-start">
            <h1 className="hero-name">Praveen Mahtani</h1>
            <h2 className="hero-subtitle">IT Specialist | AI & Automation Enthusiast | Web3 Builder</h2>
            <h2 className="hero-description">
              5+ years of experience providing exceptional IT support, optimizing systems, and automating workflows.
              Passionate about AI, community building, and using technology to solve real-world problems.
            </h2>
            <div className="mt-8">
              <button
                onClick={handleContact}
                className="cta-button hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>

        {/* Right Column - Profile Photo */}
        <div className="flex justify-center md:justify-start w-full md:pl-10">
  <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-accent relative hover:scale-105 transition-all duration-300">
    <div className="absolute inset-0 bg-accent/10 z-10" />
    <Image
      src="/praveenpfp.jpeg"
      alt="Praveen Mahtani"
      fill
      className="object-cover z-0"
      priority
    />
  </div>
</div>



        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-background p-6 rounded-lg max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-accent hover:text-accent/80"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-text-secondary">+1 (647) 865-6062</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-text-secondary">praveen.mahtani96@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 pt-4">
                <a
                  href="https://twitter.com/TruePrav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/praveen-mahtani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.065 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
