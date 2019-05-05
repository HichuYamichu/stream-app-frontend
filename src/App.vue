<template>
  <v-app dark>
    <page-header/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import PageHeader from './components/PageHeader'

export default {
  name: 'App',
  components: {
    PageHeader
  },
  data () {
    return {
      //
    }
  }
}
</script>
