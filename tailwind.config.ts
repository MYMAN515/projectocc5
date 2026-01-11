import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2f7bf6",
        "primary-strong": "#1d63d6",
        secondary: "#19b89a",
        surface: "#ffffff",
        "surface-strong": "#f9fbff",
        muted: "#5b6b7f",
        text: "#1e2a3b",
        bg: "#e6f1ff"
      },
      borderRadius: {
        blob: "28px 32px 26px 30px"
      }
    }
  },
  plugins: []
};

export default config;
