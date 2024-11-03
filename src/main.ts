import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { aliases, fa } from "vuetify/iconsets/fa-svg";

// Swiper JS
import { register } from "swiper/element/bundle";

// Vue Masonry
import { VueMasonryPlugin } from "vue-masonry";

library.add(fas);
library.add(far);
library.add(fab);

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});

// Register custom Swiper elements
register();

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueMasonryPlugin)
  .use(vuetify)
  .use(router)
  .mount("#app");
