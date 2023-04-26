import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home/Home.vue"
import Catalog from "@/views/Catalog/Catalog.vue"
import Login from "@/views/Login/Login.vue"
import AdminPanel from "@/views/AdminPanel/AdminPanel.vue"
import QuienesSomos from "@/views/QuienesSomos/QuienesSomos.vue"
import Contacto from "@/views/Contacto/Contacto.vue"
import Producto from "@/views/Producto/Producto.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: {
      msg: "My home page"
    }
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
    props: {
      msg: "My catalog page"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin-panel",
    name: "Admin Panel",
    component: AdminPanel,
    props: {
      msg: "My admin panel page"
    }
  },
  {
    path: "/quienes-somos",
    name: "Quienes Somos",
    component: QuienesSomos,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
  },
  {
    path: "/productos",
    name: "Productos",
    component: Producto,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router