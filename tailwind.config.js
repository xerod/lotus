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
        ui: {
          background: "var(--color-ui-background)",
          sidebar: "var(--color-ui-sidebar)",
          typo: "var(--color-ui-typo)",
          border: "var(--color-ui-border)",
          primary: "var(--color-ui-primary)",
        },
      },
      textColor: {
        default: {
          primary: "var(--text-default-primary)",
          secondary: "var(--text-default-secondary)",
          tertiary: "var(--text-default-tertiary)",
        },
        info: {
          primary: "var(--text-info-primary)",
          secondary: "var(--text-info-secondary)",
          tertiary: "var(--text-info-tertiary)",
        },
        success: {
          primary: "var(--text-success-primary)",
          secondary: "var(--text-success-secondary)",
          tertiary: "var(--text-success-tertiary)",
        },
        warning: {
          primary: "var(--text-warning-primary)",
          secondary: "var(--text-warning-secondary)",
          tertiary: "var(--text-warning-tertiary)",
        },
        danger: {
          primary: "var(--text-danger-primary)",
          secondary: "var(--text-danger-secondary)",
          tertiary: "var(--text-danger-tertiary)",
        },
      },
      backgroundColor: {
        default: {
          primary: "var(--bg-default-primary)",
          secondary: "var(--bg-default-secondary)",
          tertiary: "var(--bg-default-tertiary)",
          pale: "var(--bg-default-pale)",
        },
        info: {
          primary: "var(--bg-info-primary)",
          secondary: "var(--bg-info-secondary)",
          tertiary: "var(--bg-info-tertiary)",
          pale: "var(--bg-info-pale)",
        },
        success: {
          primary: "var(--bg-success-primary)",
          secondary: "var(--bg-success-secondary)",
          tertiary: "var(--bg-success-tertiary)",
          pale: "var(--bg-success-pale)",
        },
        warning: {
          primary: "var(--bg-warning-primary)",
          secondary: "var(--bg-warning-secondary)",
          tertiary: "var(--bg-warning-tertiary)",
          pale: "var(--bg-warning-pale)",
        },
        danger: {
          primary: "var(--bg-danger-primary)",
          secondary: "var(--bg-danger-secondary)",
          tertiary: "var(--bg-danger-tertiary)",
          pale: "var(--bg-danger-pale)",
        },
      },
      borderColor: {
        default: {
          primary: "var(--border-default-primary)",
          secondary: "var(--border-default-secondary)",
          tertiary: "var(--border-default-tertiary)",
        },
        info: {
          primary: "var(--border-info-primary)",
          secondary: "var(--border-info-secondary)",
          tertiary: "var(--border-info-tertiary)",
        },
        success: {
          primary: "var(--border-success-primary)",
          secondary: "var(--border-success-secondary)",
          tertiary: "var(--border-success-tertiary)",
        },
        warning: {
          primary: "var(--border-warning-primary)",
          secondary: "var(--border-warning-secondary)",
          tertiary: "var(--border-warning-tertiary)",
        },
        danger: {
          primary: "var(--border-danger-primary)",
          secondary: "var(--border-danger-secondary)",
          tertiary: "var(--border-danger-tertiary)",
        },
      },
      placeholderColor: {
        default: {
          primary: "var(--placeholder-default-primary)",
          secondary: "var(--placeholder-default-secondary)",
          tertiary: "var(--placeholder-default-tertiary)",
        },
        info: {
          primary: "var(--placeholder-info-primary)",
          secondary: "var(--placeholder-info-secondary)",
          tertiary: "var(--placeholder-info-tertiary)",
        },
        danger: {
          primary: "var(--placeholder-danger-primary)",
          secondary: "var(--placeholder-danger-secondary)",
          tertiary: "var(--placeholder-danger-tertiary)",
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
