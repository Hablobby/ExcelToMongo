<template>
  <Dialog
    v-model="showDialog"
    header="Add Row"
    :visible="showDialog"
    width="400px"
  >
    <div>
      <div v-for="(value, key) in newRow" :key="key">
        <label>{{ key }}</label>
        <InputText v-model="newRow[key]" />
      </div>
    </div>
    <div>
      <Button label="Add" @click="addRow" />
      <Button label="Cancel" @click="showDialog = false" />
    </div>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
  components: {
    Dialog,
    InputText,
    Button,
  },
  data() {
    return {
      showDialog: false,
      newRow: {},
    };
  },
  methods: {
    openDialog() {
      this.showDialog = true;
      console.log(this.showDialog);
    },
    async addRow() {
      try {
        const response = await this.$axios.post(
          "http://localhost:5000/addRow/{collection_name}", // Replace with your backend endpoint
          this.newRow
        );

        console.log(response.data);

        this.showDialog = false;
        this.newRow = {};
      } catch (error) {
        console.error("Error adding row:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styling here */
</style>
