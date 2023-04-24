<template>
  <div class="modal" :class="{ 'is-active': isActive }" @click="close">
    <div class="modal-card" @click.stop="">
      <div class="modal-header">
        <p class="modal-card-title">{{ modalParams.title }}</p>
        <v-icon size="large" color="red" icon="mdi-window-close" @click="close"></v-icon>
      </div>
      <section class="modal-card-body">
        {{ modalParams.body }}
      </section>
      <footer class="modal-card-foot">
        <v-btn color="blue" variant="outlined" @click="editUser"> {{ modalParams.actions }}</v-btn>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    isActive: {
      type: Boolean,
      required: true
    },
    modalParams: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        body: '',
        actions: '',
        items: {},
      }),
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    editUser() {

    }
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
}

.modal-card {
  margin: 10% auto;
  width: 60%;
  max-width: 600px;
  background-color: white;
  border-radius: 5px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
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

.modal-card-foot {
  background-color: #f2f2f2;
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