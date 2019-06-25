<template>
  <v-flex d-flex xs12 md8>
    <v-responsive :aspect-ratio='1/1' >
      <div id='map'>
      </div>
    </v-responsive>
  </v-flex>  
</template>
<script>
export default {
  name: 'IssMap',
  data() {
    return {
      map: null,
      mapCounter: 0,
      iss: null,
      refreshCounter: 0
    }
  },
  props: {
    latitude: Number, 
    longitude: Number
  },
  methods: {
    createMap: function() {
      var iss = {lat: this.latitude, lng: this.longitude};
      this.map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: iss});
      var marker = new google.maps.Marker({position: iss, map: this.map, icon: {
        path: google.maps.SymbolPath.CIRCLE, scale: 3, strokeColor: 'red'}, 
        title: 'ISS current position'});
      this.refreshCounter++;
    },
    addMarker: function() {
      var iss = {lat: this.latitude, lng: this.longitude};
      var marker = new google.maps.Marker({position: iss, map: this.map, icon: {
        path: google.maps.SymbolPath.CIRCLE, scale: 3, strokeColor: 'red'}, 
        title: 'ISS current position'});
      this.refreshCounter++;
    }
  },
  watch: {
    latitude: function() {
      if (this.refreshCounter === 0) {
        this.createMap();
      } else {
        this.addMarker();
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #map {
    max-width: 80vh;
    max-height: 80vh;
    height: 100%;
    width: 100%;
  }
  .v-responsive {
    max-height: 80vh;
    padding-bottom: 10px;
  }
</style>
