import Home from "./components/home.vue";
import ZidoWorks from "./components/zidoworks.vue";
import About from "./components/aboutzido.vue";
import Contact from "./components/contactsection.vue";
import privacy from "./components/privacysection.vue";
import Terms from "./components/termsandcond.vue";
export default [
  {
    path: "/",
    component: Home,
  },
  { path: "/Zido-works", component: ZidoWorks },
  { path: "/About", component: About },
  { path: "/Contact", component: Contact },
  { path: "/privacy", component: privacy },
  { path: "/terms", component: Terms },

  // { path: "/Terms", component: Terms },
];
