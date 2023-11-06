import "bootstrap/dist/css/bootstrap.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
const app = createApp(App).use(router);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000/"; // the FastAPI backend

app.use(router);
app.use(PrimeVue);
app.config.globalProperties.$axios = axios;
app.mount("#app");
