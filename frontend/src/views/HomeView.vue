<template>
  <div class="home">
    <div class="header">
      <h1>Excel to MongoDB</h1>
      <p>Upload an Excel file to populate and create a MongoDB database.</p>
    </div>
    <div class="d-flex" style="gap: 5px">
      <UploadComponent @upload="upload" />
      <TableSelector ref="tableSelector" @table-selected="changeTable" />
    </div>
    <DatabaseTable v-if="table" :table="table" class="mt-2" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: "",
    };
  },
  methods: {
    changeTable(table) {
      this.table = table;
    },
    upload() {
      this.$refs.tableSelector.refresh();
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.header {
  margin-bottom: 20px;
  text-align: center;
  color: black;
}

.header h1 {
  margin: 0;
}

.header p {
  margin: 0;
}
</style>
