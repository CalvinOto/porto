# Project screenshots

Put your screenshots in the folder that matches the project:

- `studentos/` for StudentOS
- `wspeedrun/` for WSpeedrun (a screenshot of the Swagger API page works well)
- `retail-app/` for Retail App

Then list the files in `src/content.ts`, in the project's `images` line:

```ts
images: ["/screenshots/studentos/1.png", "/screenshots/studentos/2.png"],
```

The path starts with `/screenshots` and does not include `public`.

## Tips

- Use PNG or JPG. Keep each file under about 500 KB so the page loads fast.
- Use 2 to 4 screenshots per project. Show the main screens, not every screen.
- Phone screenshots (tall) and browser screenshots (wide) both work. They are shown at a height of 220 pixels.
- Flutter: run the app on an emulator and use the camera icon in the emulator toolbar, or run `flutter screenshot`.
- Blur or replace any real names, emails or passwords before you save the screenshot.
