import fs from "node:fs";
import path from "node:path";

// Put your CV at public/files/cv.pdf. The CV buttons and the /cv page appear
// by themselves once that file exists.
export const CV_URL = "/files/cv.pdf";
export const CV_DOWNLOAD_NAME = "Calvin-Octo-Fernando-CV.pdf";

export function hasCv(): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "files", "cv.pdf"));
  } catch {
    return false;
  }
}
