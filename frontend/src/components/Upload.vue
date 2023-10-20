<template>
  <div class="upload-button">
    <FileUpload
      mode="basic"
      name="demo[]"
      url="#"  <!-- URL is not needed when handling upload with Axios -->
      accept=".xlsx"
      :maxFileSize="1000000"
      @upload="onUpload"
      :auto="true"
      chooseLabel="Browse"
    />
  </div>
</template>

<script>
import FileUpload from "primevue/fileupload";
import axios from 'axios';

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
    onUpload(event) {
      const formData = new FormData();
      formData.append('file', event.files[0]);
      axios.post('/your-upload-url', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('File uploaded successfully:', response.data);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
    },
  },
};
</script>

<style scoped>
.upload-button .p-button {
  background-color: #008cba; /* Change color */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition-duration: 0.4s;
}

.upload-button .p-button:hover {
  background-color: white;
  color: black;
  border: 2px solid #008cba; /* Change color */
}
</style>
