<template>
  <div>
    <section class="h-screen">
      <div class="px-6 h-full text-gray-800">
        <div
          class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
        >
          <div
            class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
            />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div
                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
              >
                <p class="text-center font-semibold mx-4 mb-0">Login</p>
              </div>

              <!-- Email input -->
              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  v-model="user.email"
                  id="exampleFormControlInput2"
                  placeholder="Correo Eléctronico"
                />
              </div>

              <!-- Password input -->
              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  v-model="user.password"
                  id="exampleFormControlInput2"
                  placeholder="Contraseña"
                />
              </div>

              <div class="text-center lg:text-center">
                <button
                  type="button"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  @click="validate()"
                >
                  Entrar
                </button>
              </div>
              <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                No tienes cuenta. 
                <router-link to="/register">Registrate</router-link>
                <!-- <a
                  href="#!"
                  class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >Register</a
                > -->
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {useUserStore} from '../stores/user'
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: function () {},
  methods: {
    async validate() {
      let errors = [];

      if (!this.validEmail(this.user.email)) {
        errors.push("Error, email incorrecto");
      }

      if (errors.length == 0) {
        try {
        //   let res = await axios.post(
        //     "login",
        //     this.user
        //   );
        //   console.log(res.data);
        const userStore = useUserStore()
        // console.log(this.user)
        let res = await userStore.loginUser(this.user)
        // console.log(res)
        } catch (error) {}
      }else{
        alert(errors)
      }
    },
    validEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`);
  },
};
</script>
