<template>
  <FileUpload
    mode="basic"
    name="file"
    accept=".xlsx"
    :maxFileSize="1000000"
    @upload="onUpload"
    :auto="true"
    chooseLabel="Upload xlsx file"
    url="http://localhost:5000/uploadFile"
  />
</template>

<script>
import FileUpload from "primevue/fileupload";

export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      files: null,
    };
  },
  methods: {
    onUpload() {
      this.$emit("upload");
    },
  },
};
</script>

<style scoped></style>
