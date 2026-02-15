/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GUIDE PAGE TEMPLATE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Reusable template component for all individual guide pages.
 * Provides consistent structure, SEO optimization, and placeholder content sections.
 * 
 * USAGE:
 * Import and use this template for creating new guide pages.
 * Pass guide-specific props for title, description, and content sections.
 * 
 * DATA INTEGRITY RULES:
 * - DO NOT invent mechanics
 * - DO NOT change island names
 * - Maintain authority tone
 * - NO external links
 */

import { ArrowLeft, Info } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

interface GuideSectionProps {
  title: string;
  content: string | string[];
}

interface GuideTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  sections: GuideSectionProps[];
  category?: 'beginner' | 'progression' | 'advanced' | 'mistakes';
}

export default function GuideTemplate({ 
  title, 
  subtitle, 
  description, 
  sections,
  category = 'beginner'
}: GuideTemplateProps) {
  
  const categoryColors = {
    beginner: 'cyan',
    progression: 'green',
    advanced: 'purple',
    mistakes: 'red'
  };

  const color = categoryColors[category];

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
            {/* SEO: Primary H1 heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-300 mb-6">
              {subtitle}
            </p>

            <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Guide Content Sections */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6`}>
                {section.title}
              </h2>
              
              <div className="prose prose-invert max-w-none">
                {Array.isArray(section.content) ? (
                  <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
                    {section.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Content Pending Notice */}
        <div className="mt-16">
          <Card className="bg-cyan-950/30 border-cyan-500/30">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Content Pending Verification
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  This guide structure is ready to be populated with verified Fish It mechanics, strategies, and data. Additional sections will be added as confirmed information becomes available. All content follows strict accuracy standards to ensure reliable Fish It gameplay guidance.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
}