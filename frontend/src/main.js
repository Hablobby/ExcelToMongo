import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

// Styles
import "bootstrap/dist/css/bootstrap.css";
import "primeicons/primeicons.css";

// PrimeVue Components
import UploadComponent from "./components/UploadComponent.vue";
import TableSelector from "./components/TableSelector.vue";
import DatabaseTable from "./components/DatabaseTable.vue";
import DataTable from "primevue/datatable";
import PrimeColumn from "primevue/column";
import PrimeCard from "primevue/card";
import PrimeFileUpload from "primevue/fileupload";
import PrimeDropdown from "primevue/dropdown";

// Create Vue app
const app = createApp(App);

// Register global components
app.component("UploadComponent", UploadComponent);
app.component("TableSelector", TableSelector);
app.component("DatabaseTable", DatabaseTable);
app.component("PrimeColumn", PrimeColumn);
app.component("PrimeCard", PrimeCard);
app.component("PrimeFileUpload", PrimeFileUpload);
app.component("PrimeDropdown", PrimeDropdown);
app.component("DataTable", DataTable);

// Set up axios
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000/"; // the FastAPI backend
app.config.globalProperties.$axios = axios;

// Use plugins
app.use(router);
app.use(PrimeVue);

// Mount the app
app.mount("#app");
