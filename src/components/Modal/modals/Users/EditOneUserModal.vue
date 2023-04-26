<template>
  <div class="modal-header">
    <p class="modal-card-title">Editar a {{ item.username }}</p>
  </div>
  <section class="modal-card-body text-left px-5 py-5">
    <v-text-field label="Correo" prepend-inner-icon="mdi-at" variant="outlined" placeholder="correo@gmail.com"
      :model-value="item.email" readonly></v-text-field>
    <v-text-field counter variant="outlined" placeholder="*************"
      hint="Añada un valor para actualizar la contraseña del usuario." v-model="newPassword"
      :type="show1 ? 'text' : 'password'" :prepend-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="show1 = !show1"></v-text-field>
    <v-text-field clearable label="Nombre de usuario" prepend-inner-icon="mdi-account" variant="outlined"
      placeholder="Nombre de usuario" v-model="newUsername"></v-text-field>
    <v-textarea clearable auto-grow label="Notas" variant="outlined" prepend-inner-icon="mdi-note-text"
      placeholder="Notas..." v-model="newNotes"></v-textarea>
    <v-select clearable chips label="Estado" prepend-inner-icon="mdi-list-status" variant="outlined" v-model="newStatus"
      :items="['Active', 'Blocked']"></v-select>
  </section>
  <footer class="modal-card-foot">
    <v-btn prepend-icon="mdi-content-save" color="blue" variant="outlined" @click="editUser">Guardar</v-btn>
  </footer>
</template>

<script>
const { getApiClient } = require('@/packages/sos-diesel-api-client');
const api = getApiClient();

export default {
  name: 'EditOneUserModal',
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
  data() {
    return {
      show1: false,
      show2: true,
      newPassword: '',
      newUsername: this.item.username,
      newNotes: this.item.notes,
      newStatus: this.item.status,
    }
  },
  methods: {
    close() {
      console.log('HELLO');
      this.$emit('close');
      console.log('EMITTED');
    },
    async editUser() {
      try {
        const USER_UPDATED_DATA = {
          email: this.item?.email,
          password: this.newPassword,
          username: this.newUsername,
          notes: this.newNotes,
          status: this.newStatus,
        }
        const RAW_RESPONSE = await api.post('/users/update-one', USER_UPDATED_DATA);
        //! TO-DO: CREATE NOTIFICATION COMPONENT AND SHOW SUCCESS OR FAILURE NOTIFICATION
        console.log('RAW_RESPONSE', RAW_RESPONSE);
        this.close();
        this.$emit('userEdited');
        console.log('DONE');
      } catch (error) {
        console.error(error);
      }

    }
  },
  computed: {
    filteredItems() {
      return ['Active', 'Blocked'].filter(item => item !== this.item.status);
    }
  }
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