<template>
  <div class="home">
    <div class="header">
      <h1>Excel to MongoDB</h1>
      <p>Upload an Excel file to populate a MongoDB database.</p>
    </div>
    <div class="d-flex" style="gap: 5px">
      <UploadComponent />
      <TableSelector />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UploadComponent from "@/components/UploadComponent.vue";
import TableSelector from "@/components/TableSelector.vue";

export default {
  name: "HomeView",
  components: {
    UploadComponent,
    TableSelector,
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
