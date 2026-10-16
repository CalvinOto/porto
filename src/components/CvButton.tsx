import Link from "next/link";
import { hasCv } from "@/lib/cv";

export default function CvButton({ className = "btn ghost" }: { className?: string }) {
  if (!hasCv()) return null;

  return (
    <Link className={className} href="/cv">
      View CV
    </Link>
  );
}
