<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs10 mt-4>
      <video
        :src="`${pathPrefix}/api/video/${$route.params.name}`"
        controls
        ref="video"
        autoplay
        height="100%"
        width="100%"
      ></video>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    pathPrefix: function() {
      return process.env.VUE_APP_NGINX_PROXY ? process.env.VUE_APP_NGINX_PROXY : '';
    }
  },
};
</script>