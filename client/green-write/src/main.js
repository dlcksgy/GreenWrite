import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import axios from "axios";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar);

app.config.globalProperties.$axios = axios;

app.mount("#app");
