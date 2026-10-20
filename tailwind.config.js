/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0B0A",
        "ink-2": "#14160F",
        paper: "#F3EFE4",
        "paper-2": "#E7E0D0",
        accent: "#E39E4B",
        "accent-deep": "#B8752A",
        "accent-ink": "#8A5117",
        muted: "#9C978A",
        // legacy aliases
        pyellow: "#E39E4B",
        pblack: "#0A0B0A",
      },
      fontFamily: {
        display: ['"Archivo"', "system-ui", "sans-serif"],
        sans: ['"Archivo"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        sheet: "1560px",
      },
      transitionTimingFunction: {
        stamp: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
