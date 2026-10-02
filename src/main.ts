import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import App from "./App.vue";
import "@flaticon/flaticon-uicons/css/regular/rounded.css";
import "@/assets/main.css";
import router from "./router";

createApp(App).use(VueQueryPlugin).use(router).mount("#app");
