<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col class="mx-auto" sm="8" md="6" lg="4">
        <v-card class="elevation-12 rounded-lg">
          <v-card-title class="px-6 pt-10">
            <h2 class="text-center">Login</h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="email" :rules="emailRules" label="Email" outlined required></v-text-field>
              <v-text-field v-model="password" :rules="passwordRules" label="Password" type="password" outlined
                required></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submitForm" :disabled="!valid" class="mx-6 my-4" large elevation="2"
              :class="{ 'btn-hover': isHovering }" @mouseover="isHovering = true" @mouseleave="isHovering = false">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+/.test(v) || 'Email must be valid',
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
      ],
      valid: false,
      isHovering: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        //! TODO: RUN API AND CALL AUTH ENDPOINT
        //! TODO: CREATE SESSION
        //! TODO: PASS TO ADMIN-PANEL VIEW
        //! TODO: CREATE ADMIN-PANEL VIEW
        const response = await axios.post('https://x.com', {
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.v-card__title {
  background-color: #ffffff;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid #f2f2f2;
}

.v-card__actions {
  background-color: #ffffff;
  border-top: 1px solid #f2f2f2;
  border-radius: 0 0 8px 8px;
}

.btn-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px 0 red !important;
}

.v-card__actions .btn-hover:active {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px 0 rgba(48, 62, 77, 0.2);
}
</style>
