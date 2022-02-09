let colors = {
  main: {
    DEFAULT: "#fffffe",
  },
  stroke: {
    DEFAULT: "#272343",
  },
  highlight: {
    DEFAULT: "#ffd803",
  },
  secondary: {
    DEFAULT: "#e3f6f5",
  },
  tertiary: {
    DEFAULT: "#bae8e8",
  },
  paragraph: {
    DEFAULT: "#2d334a"
  },
  headline: {
    DEFAULT: "#272343"
  },
  button: {
    DEFAULT: "#272343"
  },
  warning: {
    DEFAULT: "#FF6363"
  }
};

let screens = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

let textSizes = {
  xs: ".75rem", // 12px
  sm: ".875rem", // 14px
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
};

let borderWidths = {
  default: "1px",
  0: "0",
  2: "2px",
  4: "4px",
  8: "8px",
};


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  borderWidths: borderWidths,
  backgroundColors: colors,
  screens: screens,
  textSizes: textSizes,
  theme: {
    colors: colors,
  },
  plugins: [],
}
