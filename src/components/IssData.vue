<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs10>
        <div v-if="!isFetching">
          <v-btn round color="primary" v-on:click="fetchIssData">Check ISS position</v-btn>
        </div>
        <div v-if="isFetching">
          <v-btn round color="primary" v-on:click="fetchIssDataRefresh"><v-icon>cached</v-icon>Refresh ISS position</v-btn>
        </div>
        <div v-if="isFetching">
          <v-switch v-model.lazy="autoRefreshPosition" label='Autorefresh ISS position'></v-switch>
        </div>
        <v-layout row wrap>
          <IssMap v-if="isMapCreated" :latitude=latitude :longitude=longitude />
          <IssPosition v-if="isMapCreated" :latitude=latitude :longitude=longitude :altitude=altitude :velocity=velocity />
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>  
</template>
<script>
import IssMap from './IssMap';
import IssPosition from './IssPosition';
// import GOOGLE_MAP_API_KEY from './ApiKeys';
export default {
  name: 'IssData', 
  components: {
    IssMap,
    IssPosition
  }, 
  data() {
    return {
      isFetching: false,
      issPositionData: [], 
      latitude: 0,
      longitude: 0,
      altitude: 0,
      velocity: 0,
      isMapCreated: false,
      autoRefreshPosition: false, 
      autoRefreshInterval: 10000,
      issApiUrl: 'https://api.wheretheiss.at/v1/satellites/25544'
    }
  },
  mounted() {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_MAP_API_KEY}`;
    document.querySelector('head').appendChild(script);
  },
  watch: {
    autoRefreshPosition: function() {
      if (this.autoRefreshPosition === true) {
        this.fetchIssData();
        this.interval = setInterval(() => this.fetchIssData(),
          this.autoRefreshInterval);
      } else {
        clearInterval(this.interval);
      }
    }
  },
  methods: {
    fetchIssPosition: function() {
      this.isFetching = true;
      fetch(this.issApiUrl)
        .then(result => result.json())
        .then(result => {
          this.issPositionData = result;
          this.latitude = this.issPositionData.latitude;
          this.longitude = this.issPositionData.longitude;
          this.altitude = this.issPositionData.altitude;
          this.velocity = this.issPositionData.velocity;
        })
        .catch(error => console.log('Error: ', error))
    },
    fetchIssData: function() {
      this.fetchIssPosition();
      this.isMapCreated = true;
    },
    fetchIssDataRefresh: function() {
      this.fetchIssPosition();
    }
  }

}
</script>
<style lang="scss" scoped>
  .v-icon {
    margin-right: 5px;
  }
</style>

