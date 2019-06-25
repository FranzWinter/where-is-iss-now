<template>
  <v-flex xs12 md4>
    <v-layout align-space-around justify-space-between column>
      <v-flex d-flex xs12>
        <v-card color="teal lighten-4">
            <v-card-text>Longitude: {{longitude}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12>
        <v-card color="teal lighten-3">
            <v-card-text>Latitude: {{latitude}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12>
        <v-card color="teal lighten-2">
            <v-card-text>Altitude: {{altitude}} km</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12>
        <v-card color="teal lighten-1">
            <v-card-text>Velocity: {{velocity}} km/h</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    velocity: Number
  }
}
</script>
<style lang="scss" scoped>
  .v-card {
    margin-bottom: 10px;
  }
</style>
