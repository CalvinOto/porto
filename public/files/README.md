# Your CV file

1. Save your CV as a PDF named exactly `cv.pdf` and put it in this folder, so the path is `public/files/cv.pdf`.
2. That is all. There is nothing to edit in the code.

Once the file is here, two things appear on your site by themselves:
- A "View CV" button in the top section and in the contact section.
- A CV page at `/cv` that shows the PDF and has a "Download CV" button. Visitors get the file as `Calvin-Octo-Fernando-CV.pdf`.

Until the file exists, the "View CV" buttons are hidden, and the `/cv` page says "CV coming soon".

To replace your CV later, save the new PDF with the same name `cv.pdf`, push to GitHub, and Vercel redeploys.

Notes:
- Keep the file under about 1 MB.
- Do not put anything private in it that you would not want on a public website, such as your home address or ID number.
- On some phones the browser cannot show a PDF inside a page. Visitors there see a "Download CV" button instead.
