<template>
  <iframe
    class="w-full"
    :src="iframeSrc"
    :style="{ height: `${iframeHeight}px` }"
  />
</template>

<script>
export default {
  data() {
    return {
      iframeHeight: null
    };
  },
  computed: {
    iframeSrc() {
      return `http://localhost:5000/#!${this.$route.meta.iframe}`;
    }
  },
  mounted() {
    window.addEventListener("message", this.setIframeHeight);
    window.addEventListener("message", this.syncRoute);
  },
  destroyed() {
    window.removeEventListener("message", this.setIframeHeight);
    window.removeEventListener("message", this.syncRoute);
  },
  methods: {
    setIframeHeight({ data }) {
      if (!data.iframeHeight) {
        return;
      }
      this.iframeHeight = data.iframeHeight;
    },
    syncRoute({ data }) {
      if (!data.iframeUrl) {
        return;
      }
      // V1 uses hash based history mode
      const newRoute = new URL(data.iframeUrl).hash;
      // Sanitize URL, get string between ("#!/") and ("?" or end)
      const [, routeName] = newRoute.split(/#!|\?/);
      // Match against meta.iframe among v2 routes
      const match = this.$router.options.routes
        .filter(route => route.meta && route.meta.iframe)
        .find(route => route.meta.iframe === routeName);
      // Avoid duplicated navigation error
      if (match && match.path !== this.$route.path) {
        // Replace route (don't push() because iframe already catched the navigation)
        this.$router.replace(match);
      }
    }
  }
};
</script>

<style scoped>
iframe {
  min-height: 300px;
  background: url(/loader.gif) center center no-repeat;
}
</style>
