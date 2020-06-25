<template>
  <div class="font-sans antialiased text-ui-typo bg-ui-background">
    <div class="flex flex-col justify-start min-h-screen">
      <header
        ref="header"
        class="sticky top-0 z-10 w-full border-b bg-ui-background border-ui-border"
        @resize="setHeaderHeight"
      >
        <LayoutHeader />
      </header>

      <main
        class="container relative flex flex-wrap justify-start flex-1 w-full bg-ui-background"
      >
        <aside
          v-if="hasSidebar"
          class="sidebar"
          :class="{ open: sidebarOpen }"
          :style="sidebarStyle"
        >
          <div class="w-full pb-16 bg-ui-background">
            <Sidebar @navigate="sidebarOpen = false" />
          </div>
        </aside>

        <div
          class="w-full pb-24"
          :class="{ 'pl-0 lg:pl-12 lg:w-3/4': hasSidebar }"
        >
          <slot />
        </div>
      </main>
    </div>

    <div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
      <button
        class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white"
        @click="sidebarOpen = !sidebarOpen"
      >
        <XIcon v-if="sidebarOpen" />
        <MenuIcon v-else />
      </button>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from "@/components/Sidebar";
import LayoutHeader from "@/components/LayoutHeader";
import { MenuIcon, XIcon } from "vue-feather-icons";

export default {
  components: {
    Sidebar,
    LayoutHeader,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      headerHeight: 0,
      sidebarOpen: false,
    };
  },
  watch: {
    sidebarOpen: function(isOpen) {
      document.body.classList.toggle("overflow-hidden", isOpen);
    },
  },
  methods: {
    setHeaderHeight() {
      this.$nextTick(() => {
        this.headerHeight = this.$refs.header.offsetHeight;
      });
    },
  },
  computed: {
    sidebarStyle() {
      return {
        top: this.headerHeight + "px",
        height: `calc(100vh - ${this.headerHeight}px)`,
      };
    },
    hasSidebar() {
      return this.$page && this.headerHeight > 0;
    },
  },
  mounted() {
    this.setHeaderHeight();
  },
  metaInfo() {
    return {
      meta: [
        {
          key: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          key: "og:image",
          name: "og:image",
          content: process.env.SITE_URL + "/logo.jpg",
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: process.env.SITE_URL + "/logo.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
:root {
  // General ui color
  --color-ui-background: theme("colors.white");
  --color-ui-typo: theme("colors.gray.700");
  --color-ui-sidebar: theme("colors.cool-gray.100");
  --color-ui-border: theme("colors.gray.200");
  --color-ui-primary: theme("colors.green.700");

  // Text color
  --text-default-primary: theme("colors.gray.900");
  --text-default-secondary: theme("colors.gray.600");
  --text-default-tertiary: theme("colors.gray.400");

  --text-info-primary: theme("colors.blue.900");
  --text-info-secondary: theme("colors.blue.600");
  --text-info-tertiary: theme("colors.blue.400");

  --text-success-primary: theme("colors.green.900");
  --text-success-secondary: theme("colors.green.600");
  --text-success-tertiary: theme("colors.green.400");

  --text-warning-primary: theme("colors.yellow.900");
  --text-warning-secondary: theme("colors.yellow.600");
  --text-warning-tertiary: theme("colors.yellow.400");

  --text-danger-primary: theme("colors.red.900");
  --text-danger-secondary: theme("colors.red.600");
  --text-danger-tertiary: theme("colors.red.400");

  // Background color
  --bg-default-primary: theme("colors.gray.700");
  --bg-default-secondary: theme("colors.gray.600");
  --bg-default-tertiary: theme("colors.gray.500");
  --bg-default-pale: theme("colors.white");

  --bg-info-primary: theme("colors.blue.700");
  --bg-info-secondary: theme("colors.blue.600");
  --bg-info-tertiary: theme("colors.blue.500");
  --bg-info-pale: theme("colors.blue.50");

  --bg-success-primary: theme("colors.green.700");
  --bg-success-secondary: theme("colors.green.600");
  --bg-success-tertiary: theme("colors.green.500");
  --bg-success-pale: theme("colors.green.50");

  --bg-warning-primary: theme("colors.yellow.700");
  --bg-warning-secondary: theme("colors.yellow.600");
  --bg-warning-tertiary: theme("colors.yellow.500");
  --bg-warning-pale: theme("colors.yellow.50");

  --bg-danger-primary: theme("colors.red.700");
  --bg-danger-secondary: theme("colors.red.600");
  --bg-danger-tertiary: theme("colors.red.500");
  --bg-danger-pale: theme("colors.red.50");

  // Border color
  --border-default-primary: theme("colors.gray.700");
  --border-default-secondary: theme("colors.gray.500");
  --border-default-tertiary: theme("colors.gray.300");

  --border-info-primary: theme("colors.blue.700");
  --border-info-secondary: theme("colors.blue.500");
  --border-info-tertiary: theme("colors.blue.300");

  --border-success-primary: theme("colors.green.700");
  --border-success-secondary: theme("colors.green.500");
  --border-success-tertiary: theme("colors.green.300");

  --border-warning-primary: theme("colors.yellow.700");
  --border-warning-secondary: theme("colors.yellow.500");
  --border-warning-tertiary: theme("colors.yellow.300");

  --border-danger-primary: theme("colors.red.700");
  --border-danger-secondary: theme("colors.red.500");
  --border-danger-tertiary: theme("colors.red.300");

  // Placeholder color
  --placeholder-default-primary: theme("colors.gray.700");
  --placeholder-default-secondary: theme("colors.gray.500");
  --placeholder-default-tertiary: theme("colors.gray.300");

  --placeholder-info-primary: theme("colors.blue.700");
  --placeholder-info-secondary: theme("colors.blue.500");
  --placeholder-info-tertiary: theme("colors.blue.300");

  --placeholder-danger-primary: theme("colors.red.700");
  --placeholder-danger-secondary: theme("colors.red.500");
  --placeholder-danger-tertiary: theme("colors.red.300");

  // Shadow outline color for component
  --shadow-outline-default: theme("boxShadow.outline-gray");
  --shadow-outline-success: theme("boxShadow.outline-green");
  --shadow-outline-warning: theme("boxShadow.outline-yellow");
  --shadow-outline-danger: theme("boxShadow.outline-red");
  --shadow-outline-info: theme("boxShadow.outline-blue");
}

html[lights-out] {
  // General ui color for dark mode
  --color-ui-background: theme("colors.cool-gray.900");
  --color-ui-typo: theme("colors.cool-gray.100");
  --color-ui-sidebar: theme("colors.cool-gray.800");
  --color-ui-border: theme("colors.cool-gray.800");
  --color-ui-primary: theme("colors.green.500");

  // Text color for dark mode
  --text-default-primary: theme("colors.gray.50");
  --text-default-secondary: theme("colors.gray.100");
  --text-default-tertiary: theme("colors.gray.300");

  --text-info-primary: theme("colors.blue.50");
  --text-info-secondary: theme("colors.blue.400");
  --text-info-tertiary: theme("colors.blue.600");

  --text-success-primary: theme("colors.green.50");
  --text-success-secondary: theme("colors.green.400");
  --text-success-tertiary: theme("colors.green.600");

  --text-warning-primary: theme("colors.yellow.50");
  --text-warning-secondary: theme("colors.yellow.400");
  --text-warning-tertiary: theme("colors.yellow.600");

  --text-danger-primary: theme("colors.red.50");
  --text-danger-secondary: theme("colors.red.400");
  --text-danger-tertiary: theme("colors.red.600");

  // Background color for dark mode
  --bg-default-primary: theme("colors.gray.500");
  --bg-default-secondary: theme("colors.gray.600");
  --bg-default-tertiary: theme("colors.gray.700");
  --bg-default-pale: theme("colors.gray.800");

  --bg-info-primary: theme("colors.blue.600");
  --bg-info-secondary: theme("colors.blue.700");
  --bg-info-tertiary: theme("colors.blue.800");
  --bg-info-pale: rgba(42, 67, 101, 0.75);

  --bg-success-primary: theme("colors.green.600");
  --bg-success-secondary: theme("colors.green.700");
  --bg-success-tertiary: theme("colors.green.800");
  --bg-success-pale: rgba(35, 78, 82, 0.75);

  --bg-warning-primary: theme("colors.yellow.600");
  --bg-warning-secondary: theme("colors.yellow.700");
  --bg-warning-tertiary: theme("colors.yellow.800");
  --bg-warning-pale: rgba(116, 66, 16, 0.75);

  --bg-danger-primary: theme("colors.red.600");
  --bg-danger-secondary: theme("colors.red.700");
  --bg-danger-tertiary: theme("colors.red.800");
  // --bg-danger-pale: rgba(116, 42, 42, 0.75);
  --bg-danger-pale: rgba(119, 29, 29, 0.75);

  //Border Color for dark mode
  --border-default-primary: theme("colors.gray.300");
  --border-default-secondary: theme("colors.gray.500");
  --border-default-tertiary: theme("colors.transparent");

  --border-info-primary: theme("colors.blue.300");
  --border-info-secondary: theme("colors.blue.500");
  --border-info-tertiary: theme("colors.transparent");

  --border-success-primary: theme("colors.green.300");
  --border-success-secondary: theme("colors.green.500");
  --border-success-tertiary: theme("colors.transparent");

  --border-warning-primary: theme("colors.yellow.300");
  --border-warning-secondary: theme("colors.yellow.500");
  --border-warning-tertiary: theme("colors.transparent");

  --border-danger-primary: theme("colors.red.300");
  --border-danger-secondary: theme("colors.red.500");
  --border-danger-tertiary: theme("colors.transparent");

  // Placeholder color for dark mode
  --placeholder-default-primary: theme("colors.gray.700");
  --placeholder-default-secondary: theme("colors.gray.500");
  --placeholder-default-tertiary: theme("colors.gray.300");

  --placeholder-info-primary: theme("colors.blue.700");
  --placeholder-info-secondary: theme("colors.blue.500");
  --placeholder-info-tertiary: theme("colors.blue.300");

  --placeholder-danger-primary: theme("colors.red.700");
  --placeholder-danger-secondary: theme("colors.red.500");
  --placeholder-danger-tertiary: theme("colors.red.300");

  // Shadow outline color for dark mode component
  --shadow-outline-default: theme("boxShadow.none");
  --shadow-outline-success: theme("boxShadow.none");
  --shadow-outline-warning: theme("boxShadow.none");
  --shadow-outline-danger: theme("boxShadow.none");
  --shadow-outline-info: theme("boxShadow.none");

  pre[class*="language-"],
  code[class*="language-"] {
    @apply bg-ui-border;
  }
}

* {
  transition-property: background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}

html {
  @apply bg-ui-background;
}

h1,
h2 {
  @apply leading-snug font-bold mb-4 text-ui-typo;

  &:hover {
    a::before {
      @apply opacity-100;
    }
  }

  a {
    &::before {
      content: "#";
      margin-left: -1em;
      padding-right: 1em;
      @apply text-ui-primary absolute opacity-0 float-left;
    }
  }
}

h3,
h4 {
  @apply leading-snug font-semibold mb-4 text-ui-typo;

  &:hover {
    a::before {
      @apply opacity-100;
    }
  }

  a {
    &::before {
      content: "#";
      margin-left: -1em;
      padding-right: 1em;
      @apply text-ui-primary absolute opacity-0 float-left;
    }
  }
}

h1 {
  @apply text-4xl;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}

h4 {
  @apply text-lg;
}

a:not(.active):not(.text-ui-primary):not(.text-white) {
  @apply text-ui-typo;
}

p,
ol,
ul,
pre,
strong,
blockquote {
  @apply mb-4 text-base text-ui-typo;
}

.content {
  a {
    @apply text-ui-primary underline;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply -mt-12 pt-20;
  }

  h2 + h3,
  h2 + h2,
  h3 + h3 {
    @apply border-none -mt-20;
  }

  h2 {
    @apply border-b border-ui-border pb-1 mb-3;
  }

  h3 {
    @apply mb-2;
  }

  ul {
    @apply list-disc;

    ul {
      list-style: circle;
    }
  }

  ol {
    @apply list-decimal;
  }

  ol,
  ul {
    @apply pl-5 py-1;

    li {
      @apply mb-2;

      p {
        @apply mb-0;
      }

      &:last-child {
        @apply mb-0;
      }
    }
  }
}

blockquote {
  @apply border-l-4 border-ui-border py-2 pl-4;

  p:last-child {
    @apply mb-0;
  }
}

code {
  @apply px-1 py-1 text-ui-typo bg-ui-sidebar font-mono border-b border-r border-ui-border text-sm rounded;
}

pre[class*="language-"] {
  @apply max-w-full overflow-x-auto rounded;

  & + p {
    @apply mt-4;
  }

  & > code[class*="language-"] {
    @apply border-none leading-relaxed;
  }
}

header {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
}

table {
  @apply min-w-full text-sm;

  td,
  th {
    @apply p-3 whitespace-no-wrap;
  }

  tr {
    @apply border-b border-ui-border;
    &:last-child {
      @apply border-b-0;
    }
  }

  thead {
    @apply bg-ui-sidebar;
  }
}

.sidebar {
  @apply fixed bg-ui-background px-4 inset-x-0 bottom-0 w-full border-r border-ui-border overflow-y-auto transition-all z-40;
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }

  @screen lg {
    @apply w-1/4 px-0 bg-transparent top-0 bottom-auto inset-x-auto sticky z-0;
    transform: translateX(0);
  }
}
</style>
