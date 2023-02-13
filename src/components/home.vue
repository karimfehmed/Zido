<template>
  <div id="app">
    <HeroSec />
    <Buy />
    <Zido-works></Zido-works>
    <Video />
    <Download />
    <Contact />
  </div>
</template>

<script>
import HeroSec from "./herosection.vue";
import Buy from "./sellandbuyitem.vue";
import ZidoWorks from "./zidoworks.vue";
import Video from "./videosection.vue";
import Download from "./downloadsection.vue";
import Contact from "./contactsection.vue";
export default {
  name: "App",
  components: {
    HeroSec,
    Buy,
    "Zido-works": ZidoWorks,
    Video,
    Download,
    Contact,
  },
};
</script>

<style></style>
