<template>
  <div>
    <input type="file" ref="video"  @change="fileChanged" accept=".jpg, .jpeg., .gif, .png, .mov, .mp4">
    <!-- <h1>lo</h1> -->
  </div>
</template>

<script>
export default {
	data() {
		return {
			file: '',
			fileName: ''
		}
	},
	methods: {
		fileChanged: function(index) {
			if (!this.$refs["video"].files[0]) return
      this.file = this.$refs["video"].files[0]
			this.fileName = this.$refs["video"].files[0].name;
      console.log(this.fileName)     
      const formData = new FormData();
      formData.append('files[]', this.file)
      this.axios.post('/videos/upload', formData)

      // const fileReader = new FileReader();
      // fileReader.onload = () => {
      //   const blob = new Blob([fileReader.result], {type: file.type});

      // }
      // fileReader.readAsArrayBuffer(file)
		}
	}
};
</script>

<style>
</style>
