"use client";

import { useState } from "react";

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

function initials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Logo({ name, icon }: { name: string; icon: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="logo" aria-hidden="true">
      {failed ? (
        <span className="logo-fallback">{initials(name)}</span>
        ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${BASE}/${icon}.svg`}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
