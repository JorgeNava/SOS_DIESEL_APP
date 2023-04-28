<template>
  <div class="modal-header">
    <p class="modal-card-title">Eliminar a {{ item.username }}</p>
  </div>
  <section class="modal-card-body text-left px-5 py-5">
    <v-text-field label="Correo" prepend-inner-icon="mdi-at" variant="outlined" placeholder="correo@gmail.com"
      :model-value="item.email" readonly></v-text-field>
    <v-text-field label="Nombre de usuario" prepend-inner-icon="mdi-account" variant="outlined"
      placeholder="nombreDeUsuario" :model-value="item.username" readonly></v-text-field>
    <v-textarea auto-grow label="Notas" variant="outlined" prepend-inner-icon="mdi-note-text" placeholder="Notas..."
      :model-value="item.notes" readonly></v-textarea>
    <v-select chips label="Estado" prepend-inner-icon="mdi-list-status" variant="outlined" :model-value="item.status"
      :items="['Active', 'Blocked']" readonly></v-select>
  </section>
  <footer class="modal-card-foot">
    <v-btn prepend-icon="mdi-delete-alert" color="red" variant="outlined" @click="deleteUser">Eliminar</v-btn>
  </footer>
</template>

<script>
const { getApiClient } = require('@/packages/sos-diesel-api-client');
const api = getApiClient();

export default {
  name: 'DeleteOneUserModal',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        email: '',
        username: '',
        notes: '',
        status: '',
      }),
    }
  },
  emits: ['userRemoved'],
  methods: {
    async deleteUser() {
      try {
        const USER_EMAIL = this.item?.email;
        const QUERY = { email: USER_EMAIL}
        const RAW_RESPONSE = await api.delete('/users/delete-one-by-email', QUERY);
        let alertParams;
        if (RAW_RESPONSE?.id) {
          alertParams = {
            type: 'success',
            title: 'Usuario removido',
            text: 'Los datos del usuario han sido eliminados exitosamente!'
          }
        } else {
          alertParams = {
            type: 'error',
            title: 'Error durante la eliminicación',
            text: 'Los datos del usuario no han podido ser eliminados correctamente'
          }
        }
        this.$emit('userRemoved', alertParams);
      } catch (error) {
        console.error(error);
      }
    }
  },
};


</script>

<style scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(242, 242, 242);
  padding: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.modal-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  flex: 1;
}

.modal-card-body {
  background-color: rgb(242, 242, 242);
}

.modal-card-foot {
  background-color: rgb(242, 242, 242);
  padding: 15px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: right;
}

.v-icon {
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.v-icon:hover {
  opacity: 1;
}

@media screen and (max-width: 768px) {
  .modal-card {
    width: 90%;
    margin: 20% auto;
  }
}
</style>