import React from "react";

type JsonLdProps = {
  data: unknown;
};

/**
 * Injects JSON-LD structured data into the page.
 * Use it inside your layout or page component.
 */
export default function JsonLd({ data }: JsonLdProps) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
