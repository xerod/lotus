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

  // Component color
  --colors-pale-primary: theme("colors.gray.800");
  --colors-pale-secondary: theme("colors.gray.600");
  --colors-pale-tertiary: theme("colors.gray.400");
  --colors-info-primary: theme("colors.blue.700");
  --colors-info-secondary: theme("colors.blue.600");
  --colors-info-tertiary: theme("colors.blue.400");
  --colors-info-pale: theme("colors.blue.50");
  --colors-success-primary: theme("colors.green.700");
  --colors-success-secondary: theme("colors.green.600");
  --colors-success-tertiary: theme("colors.green.400");
  --colors-success-pale: theme("colors.green.50");
  --colors-warning-primary: theme("colors.yellow.700");
  --colors-warning-secondary: theme("colors.yellow.600");
  --colors-warning-tertiary: theme("colors.yellow.400");
  --colors-warning-pale: theme("colors.yellow.50");
  --colors-danger-primary: theme("colors.red.700");
  --colors-danger-secondary: theme("colors.red.600");
  --colors-danger-tertiary: theme("colors.red.400");
  --colors-danger-pale: theme("colors.red.50");

  // Shadow outline color for component
  --shadow-outline-default: theme("colors.white");
  --shadow-outline-success: theme("colors.white");
  --shadow-outline-warning: theme("colors.white");
  --shadow-outline-danger: theme("colors.white");
  --shadow-outline-info: theme("colors.white");
}

html[lights-out] {
  // General ui color for dark mode
  --color-ui-background: theme("colors.cool-gray.900");
  --color-ui-typo: theme("colors.cool-gray.100");
  --color-ui-sidebar: theme("colors.cool-gray.800");
  --color-ui-border: theme("colors.cool-gray.800");
  --color-ui-primary: theme("colors.green.500");

  // Component color
  --colors-pale-primary: theme("colors.gray.800");
  --colors-pale-secondary: theme("colors.gray.600");
  --colors-pale-tertiary: theme("colors.gray.400");
  --colors-info-primary: theme("colors.blue.100");
  --colors-info-secondary: theme("colors.blue.200");
  --colors-info-tertiary: theme("colors.blue.400");
  --colors-info-pale: rgba(44, 82, 130, 0.5);
  --colors-success-primary: theme("colors.green.100");
  --colors-success-secondary: theme("colors.green.200");
  --colors-success-tertiary: theme("colors.green.400");
  --colors-success-pale: rgba(47, 133, 90, 0.5);
  --colors-warning-primary: theme("colors.yellow.100");
  --colors-warning-secondary: theme("colors.yellow.200");
  --colors-warning-tertiary: theme("colors.yellow.400");
  --colors-warning-pale: rgba(183, 121, 31, 0.5);
  --colors-danger-primary: theme("colors.red.100");
  --colors-danger-secondary: theme("colors.red.200");
  --colors-danger-tertiary: theme("colors.red.400");
  --colors-danger-pale: rgba(197, 48, 48, 0.5);

  // Shadow outline color for component
  --shadow-outline-default: theme("colors.white");
  --shadow-outline-success: theme("colors.white");
  --shadow-outline-warning: theme("colors.white");
  --shadow-outline-danger: theme("colors.white");
  --shadow-outline-info: theme("colors.white");

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
