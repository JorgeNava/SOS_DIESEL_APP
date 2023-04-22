<template>
  <div>
    <div id="wrapper">
      <div id="info">
        <div id="info-content">
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
            <v-btn @click="logout">Cerrar sesión</v-btn>
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

export default {
  name: 'AdminView',
  components: {
    UserManagementTable,
    CatalogManagementTable,
  },
  data() {
    return {
      activeComponent: 'UserManagementTable'
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
h1 {
  color: #42b983;
  margin: 40px 0 0;
}

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
  background: #fff;
  width: 240px;
  height: 100%;
  transform: translate3d(-240px, 0, 0);
  transition: transform 0.35s;

  label.menu-toggle {
    position: absolute;
    right: -60px;
    width: 60px;
    height: 60px;
    line-height: 0px;
    display: block;
    padding: 0;
    text-indent: -9999px;
    background: #fff url(https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png) 50% 50% / 25px 25px no-repeat;
  }

  ul {
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

/* for show */
html,
body {
  height: 100%;
}

body {
  background: url(https://37.media.tumblr.com/f6c67ec2821a91051e4175f8a102e1e2/tumblr_n6rzpcsMk41st5lhmo1_1280.jpg) 50% 50% / cover;
}

p {
  margin-bottom: 15px;
}

#info {
  display: table;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;

  #info-content {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    font-size: 12px;

    h1 {
      color: #fff;
      border: 3px solid #fff;
      text-align: center;
      background: rgba(0, 0, 0, 0.1);
      font-size: 22px;
      font-weight: normal;
      padding: 20px;
      margin: 10px;
      display: inline-block;

      strong {
        display: block;
        font-size: 26px;
      }
    }
  }
}
</style>
