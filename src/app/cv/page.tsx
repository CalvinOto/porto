import type { Metadata } from "next";
import Link from "next/link";
import { CV_DOWNLOAD_NAME, CV_URL, hasCv } from "@/lib/cv";
import { profile } from "@/content";

export const metadata: Metadata = {
  title: `${profile.name} | CV`,
  description: `CV of ${profile.name}.`,
};

export default function CvPage() {
  const available = hasCv();

  return (
    <main className="cv-page">
      <div className="cv-toolbar">
        <Link className="btn ghost" href="/">
          &larr; Back to portfolio
        </Link>
        {available && (
          <a className="btn" href={CV_URL} download={CV_DOWNLOAD_NAME}>
            Download CV
          </a>
        )}
      </div>

      {available ? (
        <object className="cv-viewer" data={`${CV_URL}#view=FitH`} type="application/pdf" aria-label="CV preview">
          <div className="panel cv-fallback">
            <p>Your browser cannot show the CV here.</p>
            <a className="btn" href={CV_URL} download={CV_DOWNLOAD_NAME}>
              Download CV
            </a>
          </div>
        </object>
      ) : (
        <div className="panel cv-fallback">
          <h1>CV coming soon</h1>
          <p>My CV is not uploaded yet. Please check back later, or contact me by email.</p>
          <a className="btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      )}
    </main>
  );
}
