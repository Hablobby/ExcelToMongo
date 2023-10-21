<template>
  <Dropdown
    v-model="selectedTable"
    :options="collectionNames"
    optionLabel="name"
    placeholder="Select a Database/Collection"
    class="w-full md:w-14rem"
  />
</template>

<script>
import Dropdown from "primevue/dropdown";
import axios from "axios";

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      collectionNames: [],
      selectedTable: null,
    };
  },
  async created() {
    const response = await axios.get("http://localhost:5000/getDatabases");
    this.collectionNames = response.data.map((name) => ({ name }));
  },
};
</script>

<style>
.p-dropdown-items {
  padding-left: 0 !important;
}
</style>
