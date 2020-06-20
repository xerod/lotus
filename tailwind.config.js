const colors = require("@tailwindcss/ui/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //the ui is only used for documentation
        pale: {
          primary: "var(--colors-pale-primary)",
          secondary: "var(--colors-pale-secondary)",
          tertiary: "var(--colors-pale-tertiary)",
        },
        info: {
          primary: "var(--colors-info-primary)",
          secondary: "var(--colors-info-secondary)",
          tertiary: "var(--colors-info-tertiary)",
          pale: "var(--colors-info-pale)",
        },
        success: {
          primary: "var(--colors-success-primary)",
          secondary: "var(--colors-success-secondary)",
          tertiary: "var(--colors-success-tertiary)",
          pale: "var(--colors-success-pale)",
        },
        warning: {
          primary: "var(--colors-warning-primary)",
          secondary: "var(--colors-warning-secondary)",
          tertiary: "var(--colors-warning-tertiary)",
          pale: "var(--colors-warning-pale)",
        },
        danger: {
          primary: "var(--colors-danger-primary)",
          secondary: "var(--colors-danger-secondary)",
          tertiary: "var(--colors-danger-tertiary)",
          pale: "var(--colors-danger-pale)",
        },
        ui: {
          background: "var(--color-ui-background)",
          sidebar: "var(--color-ui-sidebar)",
          typo: "var(--color-ui-typo)",
          border: "var(--color-ui-border)",
          primary: "var(--color-ui-primary)",
        },
      },
      boxShadow: {
        "outline-default": "var(--shadow-outline-default)",
        "outline-success": "var(--shadow-outline-success)",
        "outline-warning": "var(--shadow-outline-warning)",
        "outline-danger": "var(--shadow-outline-danger)",
        "outline-info": "var(--shadow-outline-info)",
      },
      spacing: {
        sm: "24rem",
      },
      screens: {
        xxl: "1400px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
