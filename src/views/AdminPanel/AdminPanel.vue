<template>
  <div>
    <h1>Admin Panel</h1>
    <v-btn @click="logout">Cerrar sesión</v-btn>
  </div>
</template>


<script>
import LocalStorageService from '@/packages/local-storage-service'
export default {
  name: 'AdminView',
  props: {
    msg: String
  },
  methods: {
    logout() {
      LocalStorageService.clearSession()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
  margin: 40px 0 0;
}
</style>
