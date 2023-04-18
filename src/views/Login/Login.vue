<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
//import axios from 'axios';
console.log(process.env.VUE_APP_API_KEY);
console.log(process.env.VUE_APP_API_URL);
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        // TO-DO: Look how to setup env variables
        /*  const response = await axios.post('x', {
           username: this.username,
           password: this.password
         });
 
         if (response.status === 200) {
           // TO-DO: Store loged in user in session
           // Assuming a successful response, redirect to the admin panel
           this.$router.push('/admin-panel');
         } else {
           // Handle unsuccessful response - Maybe show in frontend error message (look for notification components)
           console.error('Login failed');
         } */
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
