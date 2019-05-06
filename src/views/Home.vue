<template>
  <v-layout>
    <v-flex xs2 v-for="(video, index) in videos" :key="index" ma-3 @click="goToVideo(video.title)">
      <v-card width="100%" height="100px">
        <v-img class="ma-0 pa-0" :src="`http://localhost:3000/api/images/miniatures/${video.title}`"></v-img>
        <div class="pa-1 vidTitle subheading">
            {{ video.title }}
          </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import HelloWorld from '../components/HelloWorld';

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      videos: []
    };
  },
  async mounted() {
    try {
      const { data } = await this.axios.get('videos');
      this.videos = data;
      console.log(this.videos);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    goToVideo: async function(name) {
      this.$router.push(`/play/${name}`);
    }
  }
};
</script>

<style scoped>
.vidTitle {
  width: 100%;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>

