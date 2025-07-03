<<<<<<< HEAD
import Link from 'next/link';

export default function Nav() {
=======
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

>>>>>>> f131f8f (Update portfolio layout, fixes for mobile and modal interaction)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-accent/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="logo cursor-pointer hover:opacity-80 transition">
              PM | TruePrav
            </span>
          </Link>

<<<<<<< HEAD
=======
          {/* Desktop Nav */}
>>>>>>> f131f8f (Update portfolio layout, fixes for mobile and modal interaction)
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/resume" className="nav-link">Resumes</Link>
            <Link href="/twitter" className="nav-link">Twitter</Link>
            <Link href="/bots" className="nav-link">Bots</Link>
          </div>

<<<<<<< HEAD
          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
=======
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="mt-4 md:hidden flex flex-col space-y-3">
            <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/resume" className="nav-link" onClick={() => setIsOpen(false)}>Resumes</Link>
            <Link href="/twitter" className="nav-link" onClick={() => setIsOpen(false)}>Twitter</Link>
            <Link href="/bots" className="nav-link" onClick={() => setIsOpen(false)}>Bots</Link>
          </div>
        )}
>>>>>>> f131f8f (Update portfolio layout, fixes for mobile and modal interaction)
      </div>
    </nav>
  );
}
