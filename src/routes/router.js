import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/user";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue"

const requireAuth = async (to, from, next) => {
    const userStore = useUserStore();
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
    // console.log("auth ==> ",user)
    if (user) {
        next();
    } else {
        next("/");
    }
    userStore.loadingSession = false;
};

const routes = [
    { path: "/", component: Login },
    { path: "/register", component: Register },
    { path: "/home", component: Home,beforeEnter: requireAuth },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;