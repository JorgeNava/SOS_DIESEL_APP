<template>
  <router-view />
</template>

<script>
const { getApiClient } = require('@/packages/sos-diesel-api-client');
getApiClient(process.env.VUE_APP_SOS_DIESEL_API_BASE_URL);
export default {
  name: 'App',
  style: [require('@/assets/fonts.scss')],
}
</script>

<style>
#app {
  font-family: 'Lora', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
