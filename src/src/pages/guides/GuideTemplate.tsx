/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GUIDE TEMPLATE - COPY THIS FOR NEW GUIDES
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/guide-template
 * 
 * SEO: This template should not be linked in production
 * 
 * INSTRUCTIONS:
 * 1. Copy this entire file
 * 2. Rename to your new guide name (e.g., NewGuideName.tsx)
 * 3. Update the route in the header comment
 * 4. Update SEO target keywords
 * 5. Replace H1 text
 * 6. Fill in guide content sections
 * 7. Update internal links as needed
 * 8. Add to routes.ts
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function GuideTemplate() {
  return (
    <div className="min-h-screen">
      
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SEO: Hero Section with H1 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 border-b border-cyan-500/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Guides */}
          <Link 
            to="/guides" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Guides Hub</span>
          </Link>

          <div>
            {/* SEO: Primary H1 heading - UPDATE THIS */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Guide Title Here (Fish It 2026 Guide)
            </h1>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Guide Content */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Introduction paragraph explaining what this guide covers and why it matters.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Second paragraph providing context or setting expectations.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Section 1 Heading
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Section content explaining a key concept or strategy.
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
          </ul>
        </div>

        {/* Section 2 with Card */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Section 2 Heading
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Important callout or strategy:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Key point 1</li>
              <li>Key point 2</li>
              <li>Key point 3</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Additional explanation or context.
          </p>
        </div>

        {/* Section 3 with Ordered List */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Section 3 Heading (Step-by-Step)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Follow these steps:</strong>
          </p>
          <ol className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-decimal list-inside">
            <li>Step 1 description</li>
            <li>Step 2 description</li>
            <li>Step 3 description</li>
            <li>Step 4 description</li>
          </ol>
        </div>

        {/* Common Mistakes Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Common Mistakes to Avoid
          </h2>
          <Card className="bg-red-950/20 border-red-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Mistake 1 description</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Mistake 2 description</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Mistake 3 description</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Summary/Checklist Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quick Reference Checklist
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Checklist item 1</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Checklist item 2</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Checklist item 3</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Related resource: <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Related resource: <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link></span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
