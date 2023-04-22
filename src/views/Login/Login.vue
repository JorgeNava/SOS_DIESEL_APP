<template>
  <div class="container">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="center">
      <h2>Please Log In</h2>
      <input type="email" placeholder="Email" v-model.trim="email" required>
      <input type="password" placeholder="Password" v-model.trim="password" required>
      <div v-if="isWrongCredentials" class="error-message">
        Wrong credentials. Please try again.
      </div>
      <v-btn v-if="!isLoading" @click="submitForm" :disabled="!isFormValid" class="mx-6 my-5 login-button" large
        elevation="2" :class="{ 'btn-hover': isHovering }" @mouseover="isHovering = true"
        @mouseleave="isHovering = false">
        Login
      </v-btn>
      <v-progress-circular class="my-5" v-else indeterminate color="red"></v-progress-circular>
    </div>
  </div>
</template>

<script>
import LocalStorageService from '@/packages/local-storage-service';
const { getApiClient } = require('@/packages/sos-diesel-api-client');
const api = getApiClient();

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      isHovering: false,
      isWrongCredentials: false,
    };
  },
  computed: {
    isNameValid() {
      return !!this.password && this.password.length >= 3;
    },
    isEmailValid() {
      return !!this.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
    isFormValid() {
      return this.isNameValid && this.isEmailValid;
    },
  },
  methods: {
    async submitForm() {
      try {
        this.isLoading = true;
        const RESPONSE = await api.authenticate(
          this.email,
          this.password,
        );
        if (!(RESPONSE instanceof Error)) {
          const USER = await api.post('/users/get-one-by-email', { email: this.email });
          LocalStorageService.setSession(RESPONSE, USER?.fields);
          this.$router.push('/admin-panel');
        } else {
          this.isWrongCredentials = true;
        }
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import '@/assets/global.scss';

*,
*:before,
*:after {
  box-sizing: border-box
}

body {
  min-height: 100vh;
  font-family: 'Raleway', sans-serif;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:hover,
  &:active {

    .top,
    .bottom {

      &:before,
      &:after {
        margin-left: 200px;
        transform-origin: -200px 50%;
        transition-delay: 0s;
      }
    }

    .center {
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
}

.top,
.bottom {

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 200vmax;
    height: 200vmax;
    top: 50%;
    left: 50%;
    margin-top: -100vmax;
    transform-origin: 0 50%;
    transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    z-index: 10;
    opacity: 0.65;
    transition-delay: 0.2s;
  }
}

.top {
  &:before {
    transform: rotate(45deg);
    background: #e46569;
  }

  &:after {
    transform: rotate(135deg);
    background: #ecaf81;
  }
}

.bottom {
  &:before {
    transform: rotate(-45deg);
    background: #60b8d4;
  }

  &:after {
    transform: rotate(-135deg);
    background: #3745b5;
  }
}

.center {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay: 0s;
  color: #333;

  input {
    width: 100%;
    padding: 15px;
    margin: 5px;
    border-radius: 1px;
    border: 1px solid #ccc;
    font-family: inherit;
  }
}

.login-button {
  color: $SECONDARY_COLOR;
  background-color: $PRIMARY_COLOR;
}

.btn-hover {
  background-color: $SECONDARY_COLOR;
  color: $PRIMARY_COLOR;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
