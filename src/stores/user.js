import { defineStore } from "pinia";
import router from "../routes/router";
import axios from 'axios'

export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: null,
        loadingUser: false,
        token: ''
    }),
    actions: {
        async registerUser(user) {
            this.loadingUser = true;
            try {
                let res = await axios.post(
                    "register",
                    user
                );
                if (res.status == 200) {
                    this.userData = res.data.data;
                    router.push("/home");
                }
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false;
            }
        },
        async loginUser(user) {
            this.loadingUser = true;
            // console.log("LOGIN ===>>>")
            try {
                let res = await axios.post(
                    "login",
                    user
                );
                // console.log(res);
                if (res.status == 200) {
                    this.userData = res.data.data[0];
                    this.token = res.data.token;
                    localStorage.setItem('userAccess', JSON.stringify(res.data));
                    // axios.defaults.headers.common = {'Authorization': `bearer ${res.data.token}`}
                    router.push("/home");
                }
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false;
            }
        },
        async logoutUser() {
            try {
                localStorage.removeItem('userAccess')
                router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
        async currentUser() {
            try {
                let data = JSON.parse(localStorage.getItem('userAccess'));

                let res = await axios.get(
                    "getall-frases",
                    {
                        headers: {
                            'Authorization': `Bearer ${data.token}`
                        }
                    }
                );
                // console.log(res)
                if (res.status == 200) {
                    this.userData = data.data[0];
                    this.token = data.token;
                    return true;

                } else {
                    return false
                }
            } catch (error) {

            }
        },
    },
});