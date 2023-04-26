<template>
  <div class="title-container">
    <h1 class="title">Users</h1>
  </div>
  <div class="d-flex justify-end my-2">
    <v-btn class="delete-btn" prepend-icon="mdi-delete" variant="outlined" @click="openModal('deleteManyUsers')"
      color="red" :disabled="!selectAll">Eliminar</v-btn>
  </div>
  <v-table fixed-header height="65vh">
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
      <tr v-for="item in users" :key="item.username" class="table-row">
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
    <v-pagination :length="10" :total-visible="5"></v-pagination>
  </div>

  <BaseModal :is-active="showModal" :type="modalType" :params="modalParams" @close="closeModal" />
</template>
<script>
import BaseModal from '@/components/Modal/BaseModal.vue';
//! ESTIMATED TIME: 2-3 DAYS (13 HRS)
//! TO-DO: ENABLE PAGINATION AND ADD STYLE - 1HR

// MARTES
//! TO-DO: MAKE ACTUAL CALL TO API TO GET ALL USERS - 2HR
//! TO-DO: MAKE ACTUAL CALL TO API TO UPDATE/DELETE USERS - 2HR
//! TO-DO: ENHACE MENU STYLE TO MATCH LAYOUTS - 30MIN

// MIERCOLES
//! TO-DO: COPY FUNCTIONALITY FOR PRODUCTS MANAGEMENT

export default {
  components: {
    BaseModal
  },
  data() {
    return {
      users: [
        {
          email: 'jorgenavadelapena@gmail.com',
          username: 'jorgenavab',
          notes: 'so fucking hot!',
          status: 'Active'
        },
        {
          email: 'johndoe@example.com',
          username: 'johndoe',
          notes: 'Lorem ipsum dolor sit amet',
          status: 'Blocked'
        },
        {
          email: 'janedoe@example.com',
          username: 'janedoe',
          notes: 'Ut enim ad minim veniam',
          status: 'Active'
        },
        {
          email: 'alice@example.com',
          username: 'alice',
          notes: 'Duis aute irure dolor in reprehenderit',
          status: 'Blocked'
        },
        {
          email: 'bob@example.com',
          username: 'bob',
          notes: 'Excepteur sint occaecat cupidatat non proident',
          status: 'Active'
        },
        {
          email: 'charlie@example.com',
          username: 'charlie',
          notes: 'Sed do eiusmod tempor incididunt',
          status: 'Blocked'
        },
        {
          email: 'dave@example.com',
          username: 'dave',
          notes: 'Consectetur adipiscing elit',
          status: 'Active'
        },
        {
          email: 'emily@example.com',
          username: 'emily',
          notes: 'Nulla consequat massa quis enim',
          status: 'Blocked'
        },
        {
          email: 'frank@example.com',
          username: 'frank',
          notes: 'Nunc id diam vel arcu sodales eleifend',
          status: 'Active'
        },
        {
          email: 'george@example.com',
          username: 'george',
          notes: 'Aliquam erat volutpat',
          status: 'Blocked'
        },
        {
          email: 'hannah@example.com',
          username: 'hannah',
          notes: 'Maecenas ac massa ut ipsum tristique suscipit',
          status: 'Active'
        },
        {
          email: 'isabel@example.com',
          username: 'isabel',
          notes: 'Aenean vitae ex eget ante feugiat efficitur',
          status: 'Blocked'
        },
        {
          email: 'jacob@example.com',
          username: 'jacob',
          notes: 'Vivamus quis justo in sapien mollis bibendum',
          status: 'Active'
        },
        {
          email: 'kate@example.com',
          username: 'kate',
          notes: 'Phasellus a luctus mauris',
          status: 'Blocked'
        },
        {
          email: 'lucas@example.com',
          username: 'lucas',
          notes: 'Fusce sagittis ante a enim maximus iaculis',
          status: 'Active'
        },
        {
          email: 'maria@example.com',
          username: 'maria',
          notes: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
          status: 'Blocked'
        },
        {
          email: 'nathan@example.com',
          username: 'nathan',
          notes: 'Integer nec lobortis lorem',
          status: 'Active'
        },
        {
          email: 'olivia@example.com',
          username: 'olivia',
          notes: 'Quisque suscipit nulla in mauris tincidunt venenatis',
          status: 'Blocked'
        },
      ],
      bulkActionItems: [],
      selectAll: false,
      showModal: false,
      modalType: '',
      modalParams: {
        title: '',
        body: '',
        actions: ''
      }
    }
  },
  methods: {
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
        this.modalParams = {
          item: JSON.parse(JSON.stringify(item))
        };
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
    }
  }
}
</script>
<style lang="scss" scoped>
.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
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
