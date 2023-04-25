<template>
  <div class="modal" :class="{ 'is-active': isActive }" @click="close">
    <div class="modal-card" @click.stop="">
      <v-icon size="large" color="red" icon="mdi-window-close" @click="close"></v-icon>
      <div v-if="type === 'editOneUser'">
        <EditOneUserModal :item="params?.item" />
      </div>
      <div v-else-if="type === 'deleteOneUser'">
        <DeleteOneUserModal :item="params?.item" />
      </div>
      <div v-else-if="type === 'deleteManyUsers'">
        <DeleteManyUsersModal :items="params?.items" />
      </div>
      <div v-else>
        <p>No se encontró ningún componente para el texto ingresado</p>
      </div>
    </div>
  </div>
</template>

<script>
import EditOneUserModal from './modals/Users/EditOneUserModal.vue';
import DeleteOneUserModal from './modals/Users/DeleteOneUserModal.vue';
import DeleteManyUsersModal from './modals/Users/DeleteManyUsersModal.vue';

export default {
  name: 'BaseModal',
  components: {
    EditOneUserModal,
    DeleteOneUserModal,
    DeleteManyUsersModal
  },
  props: {
    isActive: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      required: false,
      default: () => ({}),
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};


</script>
<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal.is-active {
  display: block;
  z-index: 100;
}

.modal.is-active * {
  z-index: inherit;
}

.modal-card {
  position: relative;

  margin: 10% auto;
  width: 60%;
  max-width: 600px;
  background-color: white;
  border-radius: 5px;
}

.mdi-window-close {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}
</style>