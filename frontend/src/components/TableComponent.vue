<template>
  <DataTable
    :value="collectionNames"
    dataKey="name"
    @row-click="onRowClick"
    stripedRows
  >
    <Column field="name" header="Database/Collection"></Column>
  </DataTable>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import axios from "axios";

export default {
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      collectionNames: [],
    };
  },
  async created() {
    const response = await axios.get("http://localhost:5000/getDatabases");
    this.collectionNames = response.data.map((name) => ({ name }));
  },
  methods: {
    onRowClick(event) {
      const clickedRowData = event.data;
      console.log(clickedRowData);
    },
  },
};
</script>

<style scoped>
.datatable .datatable-wrapper {
  border-radius: 10px;
  border: 2px solid black !important; /* Change color to your preference */
  overflow: hidden;
}
</style>
