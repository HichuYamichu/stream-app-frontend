<template>
  <v-layout>
    <v-flex xs2 v-for="(video, index) in videos" :key="index" ma-3 @click="goToVideo(video._id)">
      <v-card width="100%" height="100px">
        <v-img class="ma-0 pa-0" :src="`${pathPrefix}/miniatures/${video._id}.jpeg`"></v-img>
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
  computed: {
    pathPrefix: function() {
      return process.env.VUE_APP_NGINX_PROXY ? process.env.VUE_APP_NGINX_PROXY : 'http://localhost:3001';
    }
  },
  data() {
    return {
      videos: []
    };
  },
  async mounted() {
    try {
      const { data } = await this.axios.get('/api/videos');
      this.videos = data;
      console.log(this.videos);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    goToVideo: async function(id) {
      this.$router.push(`/play/${id}`);
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

