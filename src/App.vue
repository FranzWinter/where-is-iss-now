<template>
  <v-app>
    <v-content>
      <IssData/>
    </v-content>
  </v-app>
</template>

<script>
import IssData from './components/IssData'

export default {
  name: 'App',
  components: {
    IssData
  },
  data () {
    return {
      //
    }
  }
}
</script>
