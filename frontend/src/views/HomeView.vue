<template>
  <div class="home">
    <div class="header">
      <h1>Excel to MongoDB</h1>
      <p>Upload an Excel file to populate a MongoDB database.</p>
    </div>
    <Upload />
  </div>
</template>

<script>
// @ is an alias to /src
import Upload from "@/components/Upload.vue";

export default {
  name: "HomeView",
  components: {
    Upload,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0e0e0; /* Grey background color */
}

.header {
  margin-bottom: 20px;
  text-align: center;
}

.header h1 {
  margin: 0;
}

.header p {
  margin: 0;
}
</style>
