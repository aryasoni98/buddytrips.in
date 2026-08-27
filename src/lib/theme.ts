export const THEME_STORAGE_KEY = "buddytrips-theme";

// Inlined into a blocking <script> in <head> so dark mode (if the user
// previously chose it) applies before first paint - runs ahead of
// hydration, so it must stay plain vanilla JS with no dependencies.
// Site defaults to light for everyone; this only ever adds data-theme,
// never reads prefers-color-scheme.
export const themeInitScript = `(function(){try{if(localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)})==="dark"){document.documentElement.setAttribute("data-theme","dark");}}catch(e){}})();`;

type ThemeListener = () => void;

let listeners: ThemeListener[] = [];

export function subscribeTheme(listener: ThemeListener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

export function getThemeSnapshot(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.getAttribute("data-theme") === "dark";
}

export function getThemeServerSnapshot(): boolean {
  return false;
}

export function setIsDark(isDark: boolean) {
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  try {
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  } catch {
    // localStorage unavailable (private mode, etc.) - theme just won't persist.
  }
  listeners.forEach((listener) => listener());
}
