"use client";

import { useState } from "react";

function Shot({ src, title, index }: { src: string; title: string; index: number }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${title} screenshot ${index + 1}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Screenshots({
  images,
  title,
  showPlaceholders,
}: {
  images: string[];
  title: string;
  showPlaceholders: boolean;
}) {
  if (images.length === 0 && !showPlaceholders) return null;

  return (
    <div className="shots" role="group" aria-label={`${title} screenshots`}>
      {images.length > 0
        ? images.map((src, i) => <Shot key={src} src={src} title={title} index={i} />)
        : [1, 2, 3].map((n) => (
            <div key={n} className="shot-ph">
              Screenshot {n}
              <br />
              (only visible on your computer)
            </div>
          ))}
    </div>
  );
}
