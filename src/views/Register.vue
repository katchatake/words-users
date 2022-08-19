<template>
    <div>
        <section class="h-screen">
            <div class="px-6 h-full text-gray-800">
                <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="w-full" alt="Sample image" />
                    </div>
                    <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form>
                            <div
                                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p class="text-center font-semibold mx-4 mb-0">Registro</p>
                            </div>

                            <!-- Name input -->
                            <div class="mb-6">
                                <input type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    v-model="user.name" id="exampleFormControlInput2" placeholder="Nombre completo" />
                            </div>

                            <!-- Email input -->
                            <div class="mb-6">
                                <input type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    v-model="user.email" id="exampleFormControlInput2" placeholder="Correo Eléctronico" />
                            </div>

                            <!-- Type input -->
                            <div class="mb-6">
                                <!-- <input type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    v-model="user.email" id="exampleFormControlInput2" placeholder="Type User" /> -->
                                <select class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" v-model="user.type">
                                    <option value="0">Tipo de Usuario</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Inivtado</option>
                                </select>
                            </div>

                            <!-- Password input -->
                            <div class="mb-6">
                                <input type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    v-model="user.password" id="exampleFormControlInput2" placeholder="Contraseña" />
                            </div>
                            <!-- Password input -->
                            <div class="mb-6">
                                <input type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    v-model="user.c_password" id="exampleFormControlInput2" placeholder="Contraseña otra vez" />
                            </div>

                            <div class="text-center lg:text-center">
                                <button type="button"
                                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    @click="validate()">
                                    Registrar
                                </button>
                            </div>
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
                name:'',
                email: "",
                type:0,
                password: "",
                c_password:''
            },
        };
    },
    computed: function () { },
    methods: {
        async validate() {
            let errors = [];

            if (this.user.name.length <= 4) {
                errors.push("Error, agrega tú nombre completo");
            }

            if (!this.validEmail(this.user.email)) {
                errors.push("Error, correo eléctronico incorrecto");
            }

            if (this.user.type == 0) {
                errors.push("Error, elige un tipo de usuario");
            }

            if (this.user.password.length < 8) {
                errors.push("Error, la contraseña debe tener al menos 8 caracteres");
            }

            if(this.user.password.localeCompare(this.user.c_password) != 0){
                errors.push("Error, las contraseñas no son iguales");
            }

            if (errors.length == 0) {
                try {
                    const userStore = useUserStore()
                    let res = await userStore.registerUser(this.user)
                    // console.log(res.data);
                } catch (error) { }
            }else{
                // console.log(errors)
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
        // console.log(`The initial count is ${this.count}.`);
    },
};
</script>
