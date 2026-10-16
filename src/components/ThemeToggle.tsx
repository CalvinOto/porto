"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const explicit = root.getAttribute("data-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = explicit ? explicit === "dark" : systemDark;
    root.setAttribute("data-theme", isDark ? "light" : "dark");
  }

  return (
    <button
      className="theme-btn"
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark"
    >
      Theme
    </button>
  );
}
