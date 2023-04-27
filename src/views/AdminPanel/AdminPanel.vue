<template>
  <div>
    <div id="wrapper">
      <div id="panel">
        <div id="panel-content">
          <component :is="activeComponent"></component>
        </div>
      </div>
      <input type="checkbox" id="menu" name="menu" class="menu-checkbox">
      <div class="menu">
        <label class="menu-toggle" for="menu"><span>Toggle</span></label>
        <ul>
          <li>
            <a href="#" @click="activeComponent = 'UserManagementTable'">Usuarios</a>
          </li>
          <li>
            <a href="#" @click="activeComponent = 'CatalogManagementTable'">Catalogo</a>
          </li>
          <li>
            <v-btn class="logout--button" @click="logout">Cerrar sesión</v-btn>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LocalStorageService from '@/packages/local-storage-service'
import UserManagementTable from '@/components/UserManagementTable/UserManagementTable.vue'
import CatalogManagementTable from '@/components/CatalogManagementTable/CatalogManagementTable.vue'

// MIERCOLES
//! TO-DO: ENHACE MENU STYLE TO MATCH LAYOUTS - 30MIN
//! TO-DO: COPY FUNCTIONALITY FOR PRODUCTS MANAGEMENT

// JUEVES
//! TO-DO: PROTECT VIEWS BASED IN USER SESSION
//! TO-DO: FIX RODRIS VIEWS
//! TO-DO: UPLOAD APP & API TO TEST ENV

export default {
  name: 'AdminView',
  components: {
    UserManagementTable,
    CatalogManagementTable,
  },
  data() {
    return {
      activeComponent: 'UserManagementTable',
    }
  },
  methods: {
    logout() {
      LocalStorageService.clearSession()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

/* reset */
* {
  margin: 0;
  padding: 0;
}

#wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  padding: 4rem 10rem 0rem;
}


label {
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 100%;
  transform: translate3d(-240px, 0, 0);
  transition: transform 0.35s;
  background-color: #F18383;
  z-index: 1;

  
  .logout--button{
    background-color: white;
  }

  label.menu-toggle {
    position: absolute;
    right: -60px;
    width: 60px;
    height: 60px;
    line-height: 0px;
    display: block;
    padding: 0;
    text-indent: -9999px;
    background: #F18383 url(https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png) 50% 50% / 25px 25px no-repeat;
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      align-items: center;

      >label {
        background: url(https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-128.png) 95% 50% / 16px 16px no-repeat;
      }

      a,
      label {
        display: block;
        text-align: center;
        padding: 0 20px;
        line-height: 60px;
        text-decoration: none;
        color: #000;

        &:hover {
          color: #666;
        }
      }
    }
  }

  /* hide inputs */
  &-checkbox {
    display: none;
  }

  /* hide navigation icon for sublabels */
  & .menu label.menu-toggle {
    background: none;
  }

  /* fade in checked menu */
  &-checkbox:checked+.menu {
    transform: translate3d(0, 0, 0);
  }
}
</style>
