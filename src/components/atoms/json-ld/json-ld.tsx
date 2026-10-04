/**
 * Server Component that renders a `<script type="application/ld+json">` tag
 * for Schema.org structured data. Ships zero client JavaScript.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
