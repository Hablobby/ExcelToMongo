<template>
  <div v-if="!readyForRender" class="text-center mt-4">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <p>Loading...</p>
  </div>

  <PrimeCard v-else style="width: 80%">
    <template #title>
      <h3>{{ table }}</h3>
    </template>
    <template #content>
      <DataTable
        :value="tableContents"
        paginator
        :rows="5"
        showGridlines
        stripedRows
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
      >
        <PrimeColumn
          v-for="col in columns"
          :key="col.field"
          :field="col.field"
          :header="col.header"
        />
      </DataTable>
    </template>
  </PrimeCard>
</template>

<script>
export default {
  data() {
    return {
      tableContents: [],
      readyForRender: false,
    };
  },
  props: {
    table: {
      type: String,
      required: true,
    },
  },
  created() {
    this.getDatabaseTable();
  },
  computed: {
    columns() {
      if (this.tableContents.length > 0) {
        return Object.keys(this.tableContents[0]).map((key) => ({
          field: key,
          header: key,
        }));
      }
      return [];
    },
  },
  watch: {
    table() {
      this.getDatabaseTable();
    },
  },
  methods: {
    getDatabaseTable() {
      this.readyForRender = false;
      this.$axios
        .get("http://localhost:5000/getCollection/" + this.table)
        .then((response) => {
          this.tableContents = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.readyForRender = true;
        });
    },
  },
};
</script>

<style scoped>
.p-datatable-custom {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.p-paginator {
  display: flex;
  justify-content: flex-end;
}
</style>
