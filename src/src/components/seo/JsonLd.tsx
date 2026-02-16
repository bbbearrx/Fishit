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
