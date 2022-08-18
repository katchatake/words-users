import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue"

const routes = [
    { path: "/", component: Login },
    { path: "/register", component: Register },
    { path: "/home", component: Home },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;