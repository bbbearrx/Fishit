/**
 * ═══════════════════════════════════════════════════════════════════════════
 * JSON-LD COMPONENT — STRUCTURED DATA FOR SEO
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * This component injects JSON-LD structured data into the page's <head>.
 * JSON-LD (JavaScript Object Notation for Linked Data) helps search engines
 * understand the content and context of your page.
 * 
 * WHAT IS JSON-LD?
 * JSON-LD is a format for embedding structured data in web pages using
 * Schema.org vocabulary. Search engines like Google use this data to:
 * - Display rich snippets in search results
 * - Enable enhanced features (FAQ accordions, ratings, breadcrumbs)
 * - Better understand page content and relationships
 * 
 * SEO BENEFITS:
 * - Rich snippets in Google search results (more clickable)
 * - FAQ accordion displays directly in search
 * - Better rankings for specific query types
 * - Improved appearance in search (more visibility)
 * 
 * USAGE EXAMPLE — FAQPage Schema:
 * 
 * import JsonLd from '../components/seo/JsonLd';
 * 
 * const faqSchema = {
 *   "@context": "https://schema.org",
 *   "@type": "FAQPage",
 *   "mainEntity": faqs.map(faq => ({
 *     "@type": "Question",
 *     "name": faq.question,
 *     "acceptedAnswer": {
 *       "@type": "Answer",
 *       "text": faq.answer
 *     }
 *   }))
 * };
 * 
 * return (
 *   <div>
 *     <JsonLd data={faqSchema} />
 *     {/* Rest of page content */}
 *   </div>
 * );
 * 
 * USAGE EXAMPLE — BreadcrumbList Schema:
 * 
 * const breadcrumbSchema = {
 *   "@context": "https://schema.org",
 *   "@type": "BreadcrumbList",
 *   "itemListElement": [
 *     { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fishit.gg" },
 *     { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://fishit.gg/guides" }
 *   ]
 * };
 * 
 * COMMON SCHEMA TYPES:
 * - FAQPage: For pages with FAQ accordions
 * - BreadcrumbList: For breadcrumb navigation
 * - Article: For blog posts and guides
 * - WebSite: For homepage
 * - VideoObject: For video content
 * 
 * IMPORTANT RULES:
 * - Schema data MUST match visible page content exactly
 * - Do not add information that isn't shown on the page
 * - Keep answers under 200 characters when possible for best display
 * - Test with Google's Rich Results Test tool
 * 
 * DEVELOPER NOTES:
 * - This component renders a <script> tag with type="application/ld+json"
 * - The script is placed in the component's output (not in <head>)
 * - React will render it where you place the component
 * - You can have multiple JsonLd components on one page
 */

interface JsonLdProps {
  data: object;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
