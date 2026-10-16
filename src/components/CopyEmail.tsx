"use client";

import { useRef, useState, type ReactNode } from "react";
import { profile } from "@/content";

export default function CopyEmail({ email, children }: { email: string; children?: ReactNode }) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [note, setNote] = useState("");

  function show(message: string) {
    setNote(message);
    setTimeout(() => setNote(""), 2500);
  }

  function selectText() {
    if (!textRef.current) return;
    const range = document.createRange();
    range.selectNodeContents(textRef.current);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    show("Address selected. Press copy.");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      show("Copied");
    } catch {
      selectText();
    }
  }

  return (
    <>
      <p className="email" ref={textRef}>
        {email}
      </p>
      <div className="actions">
        <a className="btn" href={`mailto:${email}`}>
          Send an email
        </a>
        <button className="btn ghost" type="button" onClick={copy}>
          Copy address
        </button>
        {children}
        {profile.links.map((link) => (
          <a key={link.label} className="btn ghost" href={link.href}>
            {link.label}
          </a>
        ))}
        <span className="copied" role="status">
          {note}
        </span>
      </div>
    </>
  );
}
