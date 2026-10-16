# Calvin Octo Fernando, Portfolio

A one-page portfolio built with Next.js, React and TypeScript.

## Edit your content

Open `src/content.ts`. Your name, intro, projects, tech stack, about text and contact details all live there. You do not need to touch any HTML.

The projects were written from your GitHub READMEs. Your name, email, GitHub and LinkedIn links are filled in.

- **Projects:** edit or add items in the `projects` list. Each has a title, description, highlights line, tags, a link to the source code, and an optional live demo link.
- **Screenshots:** put image files in `public/screenshots/<project>/` and list them in the project's `images` line. Details are in `public/screenshots/README.md`. While you run the site on your computer, dashed boxes show where screenshots will go. They never appear on the deployed site.
- **Education:** edit the `education` block for your university, program, semester and GPA.
- **CV:** save your CV as `public/files/cv.pdf`. Nothing to edit in the code. The "View CV" buttons and the `/cv` page (which shows and downloads the PDF) appear once the file exists. Details are in `public/files/README.md`.
- **Tech stack:** edit the `stack` list. Each tool has a name and a logo.
- **Logos:** each tool has an `icon` value such as `"react/react-original"`. The logos come from Devicon. To add a tool, find its name at https://devicon.dev and use the same pattern. If a logo cannot load, the tile shows the tool's initials instead.

To change colors, edit the variables at the top of `src/app/globals.css`.

## Run it on your computer

You need Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

1. Create a new repository on GitHub and push this folder to it.
2. Go to https://vercel.com/new and import the repository.
3. Leave the settings as they are. Vercel detects Next.js on its own.
4. Click Deploy. Every later push to the main branch redeploys the site.

You can add your own domain later in the project's Domains settings on Vercel.
