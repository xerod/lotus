const { colors } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red,
        info: colors.blue,
        ui: {
          background: "var(--color-ui-background)",
          sidebar: "var(--color-ui-sidebar)",
          typo: "var(--color-ui-typo)",
          border: "var(--color-ui-border)",
          primary: "var(--color-ui-primary)",
        },
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
