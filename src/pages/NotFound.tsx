/**
 * ═══════════════════════════════════════════════════════════════════════════
 * 404 NOT FOUND PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * This page displays when a user visits a URL that doesn't exist on the site.
 * It provides helpful navigation options to get back to valid content.
 * 
 * WHO IT'S FOR:
 * - Users who mistype a URL or follow a broken link
 * - Search engine crawlers encountering dead links
 * - Users navigating from outdated bookmarks
 * 
 * HOW TO EDIT SAFELY:
 * 1. SAFE: Edit all text in the "EDITABLE CONTENT" section
 * 2. SAFE: Change quick links URLs and labels
 * 3. ENGAGEMENT: Page provides clear action buttons and alternatives
 * 4. WARNING: Do not edit structure unless changing layout
 * 
 * WHAT THIS PAGE CONTAINS:
 * - Large "404" error number
 * - User-friendly error message with fishing theme
 * - Two action buttons (Go Home, Go Back)
 * - Quick links grid to main pages
 * 
 * ENGAGEMENT FEATURES:
 * - Friendly, themed error message (not intimidating)
 * - Multiple ways to recover (buttons + links)
 * - Quick access to popular pages
 * 
 * SEO NOTES:
 * - This page should return a 404 HTTP status code
 * - It should NOT be indexed by search engines
 * - The noindex meta tag should be set (handled elsewhere)
 */

import { Fish, Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

export default function NotFound() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE CONTENT — SAFE TO CHANGE
  // ═══════════════════════════════════════════════════════════════════════════

  // EDITABLE: Error title
  const errorTitle = "Page Not Found";

  // EDITABLE: Error message (keep it friendly and thematic)
  // This message uses a fishing metaphor to stay on-brand
  const errorMessage = "Looks like this fish got away! The page you're looking for doesn't exist.";

  // EDITABLE: Primary button text
  const goHomeButtonText = "Go Home";

  // EDITABLE: Secondary button text
  const goBackButtonText = "Go Back";

  // EDITABLE: Quick links section title
  const quickLinksTitle = "Quick Links";

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Quick Links
  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT: These links help users find their way to useful pages
  // ENGAGEMENT: Choose your most important/popular pages
  // 
  // TO EDIT:
  // - url: The link destination (must start with /)
  // - label: The text displayed for the link
  // 
  // TO ADD MORE LINKS:
  // Add new objects to the array:
  // { url: '/your-page', label: 'Your Label' },
  // 
  // TO REMOVE LINKS:
  // Delete the object from the array
  // 
  // TIP: Keep the list short (4-8 links maximum)

  const quickLinks = [
    { url: '/', label: 'Home' },
    { url: '/overview', label: 'Overview' },
    { url: '/guides', label: 'Guides' },
    { url: '/faq', label: 'FAQ' },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: PAGE LAYOUT (DO NOT EDIT UNLESS CHANGING DESIGN)
  // ═══════════════════════════════════════════════════════════════════════════
  // This page uses centered layout with a single card

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <Card className="bg-gradient-to-br from-cyan-950/50 to-blue-950/50" glow>
          
          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* 404 Icon and Text */}
          {/* ─────────────────────────────────────────────────────────────────── */}
          <div className="mb-8">
            {/* Fish icon in gradient circle */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/50 mb-6">
              <Fish className="w-12 h-12 text-white" />
            </div>
            
            {/* Large 404 number */}
            <h1 className="text-8xl font-bold text-white mb-4">
              404
            </h1>
            
            {/* Error title */}
            <h2 className="text-3xl font-bold text-white mb-4">
              {errorTitle}
            </h2>
            
            {/* Error message */}
            <p className="text-xl text-gray-400 mb-8">
              {errorMessage}
            </p>
          </div>

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* ENGAGEMENT: Action Buttons */}
          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* Two clear options for users to navigate away from error */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary button: Go to homepage */}
            <Button to="/" size="lg">
              <Home className="w-5 h-5 mr-2" />
              {goHomeButtonText}
            </Button>
            
            {/* Secondary button: Go to previous page */}
            {/* WARNING: This uses browser history, won't work if user landed directly on 404 */}
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              {goBackButtonText}
            </Button>
          </div>

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* ENGAGEMENT: Quick Links Grid */}
          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* Additional navigation options if buttons don't meet user's needs */}
          <div className="mt-12 pt-8 border-t border-cyan-500/20">
            <h3 className="text-white font-semibold mb-4">
              {quickLinksTitle}
            </h3>
            {/* STRUCTURE: Responsive grid (2 columns mobile, 4 columns desktop) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}