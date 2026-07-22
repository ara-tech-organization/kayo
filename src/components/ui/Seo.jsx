/**
 * Per-route document metadata. React 19 hoists <title>, <meta> and <link>
 * rendered anywhere in the tree into <head>, so no extra dependency is needed.
 */
const ORIGIN = "https://kayointernational.in";

export default function Seo({ title, description, path = "/", image, jsonLd }) {
  const url = `${ORIGIN}${path}`;
  /* Social crawlers need an absolute image URL — site-relative paths are ignored. */
  const imageUrl = image?.startsWith("/") ? `${ORIGIN}${image}` : image;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={imageUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={imageUrl} />}

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}
