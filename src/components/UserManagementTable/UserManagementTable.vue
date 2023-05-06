<template>
  <div class="title-container">
    <h1 class="title">Users</h1>
  </div>
  <div class="d-flex justify-end my-2">
    <v-btn class="delete-btn" prepend-icon="mdi-delete" variant="outlined" @click="openModal('deleteManyUsers')"
      color="red" :disabled="isBulkDeleteDisabled()">Eliminar</v-btn>
  </div>
  <v-table fixed-header height="55vh">
    <thead>
      <tr>
        <th class="checkbox--cell">
          <v-checkbox v-model="selectAll" color="indigo" @change="selectAllRows" hide-details></v-checkbox>
        </th>
        <th class="email--cell">Correo</th>
        <th class="username--cell">Nombre de usuario</th>
        <th class="notes--cell">Notas</th>
        <th class="status--cell">Estatus</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in displayedUsers" :key="index" class="table-row">
        <td class="checkbox--cell">
          <v-checkbox v-model="bulkActionItems" color="indigo" :value="item" hide-details></v-checkbox>
        </td>
        <td class="email--cell">{{ item.email }}</td>
        <td class="username--cell">{{ item.username }}</td>
        <td class="notes--cell">{{ item.notes }}</td>
        <td class="status--cell">
          <v-chip :color="item.status === 'Active' ? 'green' : 'red'">
            {{ item.status }}
          </v-chip>
        </td>
        <td class="action-icons">
          <v-btn icon class="edit-btn mr-2" @click="openModal('editOneUser', item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon class="delete-btn" @click="openModal('deleteOneUser', item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  <div class="text-center mt-7">
    <v-pagination
      v-model="currentPage"
      :length="Math.round(totalItems / itemsPerPage)"
      :total-visible="5"
    ></v-pagination>
  </div>
  <BaseModal :is-active="showModal" :type="modalType" :params="modalParams" @close="closeModal" @modalActionTriggered="modalActionTriggered"/>
  
  <v-alert
    closable
    class="alert"
    :model-value="isAlertVisible"
    :type="alertParams.type"
    :title="alertParams.title"
    :text="alertParams.text"
  ></v-alert>
</template>
<script>
import BaseModal from '@/components/Modal/BaseModal.vue';
import { CURRENT_PAGE, ITEMS_PER_PAGE } from './constants';

const { getApiClient } = require('@/packages/sos-diesel-api-client');
const api = getApiClient();

export default {
  components: {
    BaseModal
  },
  data() {
    return {
      currentPage: CURRENT_PAGE,
      itemsPerPage: ITEMS_PER_PAGE,
      totalItems: 5,
      users: [],
      bulkActionItems: [],
      selectAll: false,
      showModal: false,
      modalType: '',
      modalParams: {
        title: '',
        body: '',
        actions: ''
      },
      isAlertVisible: false,
      alertParams: {
        type: 'success',
        title: '',
        text: ''
      }
    }
  },
  computed: {
    displayedUsers() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage;
      return this.users.slice(startIndex, endIndex)
    }
  },
  async created() {
    try {
      this.getUsers();
      this.totalItems = this.users.length; 
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async getUsers() {
      const RAW_RESPONSE = await api.get(
        '/users/get-all',
      );
      this.users = RAW_RESPONSE.map(user => {
        return this.convertKeysToLower(user?.fields);
      });
    },
    selectAllRows() {
      if (this.selectAll) {
        this.bulkActionItems = [...this.users];
      } else {
        this.bulkActionItems = [];
      }
    },
    openModal(type, item = {}) {
      if (
        type === "editOneUser" ||
        type === "deleteOneUser"
      ) {
        this.modalParams = item;
      } else if (type === "deleteManyUsers") {
        this.modalParams = {
          items: JSON.parse(JSON.stringify(this.bulkActionItems))
        };
      }
      this.modalType = type;
      this.showModal = true;
    },
    closeModal() {
      this.modalParams = {
        title: '',
        body: '',
        actions: ''
      };
      this.showModal = false;
      if (this.modalType === "deleteManyUsers") {
        this.selectAll = false;
        this.bulkActionItems = [];
      }
      this.getUsers();
    },
    async modalActionTriggered(params) {
      this.closeModal();
      this.alertParams = {
        type: params?.type,
        title: params?.title,
        text: params?.text
      }
      this.isAlertVisible = true;
      await new Promise(resolve => setTimeout(resolve, 5000))
      this.isAlertVisible = false;

    },
    isBulkDeleteDisabled() {
      return !this.selectAll && this.bulkActionItems.length === 0;
    },
    convertKeysToLower(obj) {
      const newObj = {};
      for (let key in obj) {
        const newKey = key.charAt(0).toLowerCase() + key.slice(1);
        newObj[newKey] = obj[key];
      }
      return newObj;
    }
  }
}
</script>
<style lang="scss" scoped>

.alert{
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1vw;
  margin-top: 5vh;
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.puto{
  background-color: red;
}

.title {
  font-family: 'Lora', serif;
  font-family: 'Sansita Swashed', cursive;
  font-size: 3rem;
}

.v-table {

  th {
    display: flex;
    align-items: center;
  }

  td {
    word-wrap: break-word;
    display: flex;
    align-items: center;
    text-align: start;
  }

  .email--cell {
    width: 20rem;
  }

  .username--cell {
    width: 14rem;
  }

  .notes--cell {
    width: 38rem;
  }

  .status--cell {
    width: 7rem;
  }

  tr {
    display: flex;
    align-items: center;

    &:hover {

      .edit-btn,
      .delete-btn {
        cursor: pointer;
        font-size: 1.2rem;
        display: flex !important;
      }
    }

    .action-icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80px;
      border-bottom: none !important;

      .edit-btn,
      .delete-btn {
        cursor: pointer;
        font-size: 1.2rem;
        display: none;
      }
    }
  }
}
</style>
