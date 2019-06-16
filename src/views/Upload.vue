<template>
  <v-layout mt-5 row wrap justify-center align-center>
    <v-flex xs10>
      <v-card class="pa-5">
        <v-text-field v-model="videoName" outline color="error" label="title"></v-text-field>
        <div class="upload-btn-wrapper">
          <v-btn large outline tag="label" for="file" class="btn">Choose a file</v-btn>
          <input type="file" ref="video" accept=".mp4" id="file" class="fileInput">
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :loading="loading" @click="upload">Upload</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      file: '',
      videoName: '',
      loading: false
    };
  },
  methods: {
    // 140 x 75
    upload: async function(index) {
      if (!this.$refs['video'].files[0]) return;
      this.loading = true
      this.file = this.$refs['video'].files[0];
      const formData = new FormData();
      formData.append('video', this.file);
      formData.append('desc', 'dsdasdsadasdas');
      formData.append('title', this.videoName);
      await this.axios.post('/api/videos/upload', formData);
      this.loading = false
    }
  }
};
</script>

<style scoped>
.upload-btn-wrapper {
  width: 100%;
  margin: auto;
  display: block;
  text-align: center;
}

.btn {
  margin: auto;
}

input[type="file"] {
    display: none;
}


</style>
