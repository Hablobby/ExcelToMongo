<template>
  <Dropdown
    v-model="selectedTable"
    :options="collectionNames"
    placeholder="Select a Database/Collection"
    class="w-full md:w-14rem"
    :loading="loading"
    @change="onTableSelect"
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
      loading: true,
    };
  },
  methods: {
    async refresh() {
      this.loading = true;
      const response = await axios
        .get("http://localhost:5000/getDatabases")
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
      this.collectionNames = response.data.map((name) => name);
    },
    onTableSelect() {
      this.$emit("table-selected", this.selectedTable);
    },
  },
  created() {
    this.refresh();
  },
};
</script>

<style>
.p-dropdown-items {
  padding-left: 0 !important;
}
</style>
