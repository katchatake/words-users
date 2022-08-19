<template>
    <div class="container mt-5 px-4">
        <div class="flex items-center justify-center">
            <div class="inline-flex" role="group">
                <button type="button"
                    class=" rounded-l px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ">
                    Activados </button>
                <button type="button"
                    class="rounded-r px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Rechazados
                </button>
                <button type="button"
                    class="rounded-r px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Todos</button>
            </div>
        </div>
        <div class="flex items-center mt-4 justify-center">
            <div class="inline-flex" role="group">
                <!-- <button type="button"
                    class=" rounded-l px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ">
                    Estatus </button> -->
                <button type="button"
                    class="rounded-l px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Más
                    recientes
                </button>
                <button type="button"
                    class="rounded-r px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Más
                    antiguos</button>
            </div>
        </div>
        <div class="flex flex-col mt-5 px-50">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 mt-5 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="bg-white border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Frase
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Status
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody v-for="(frase, index) in frases" :key="index">
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {{ (index + 1) }}</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{ frase.texto }}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{ frase.statusName }}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button v-if="frase.status != 2" type="button"
                                            class="inline-block px-6 ml-3 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            v-on:click="toggleModal(index)">
                                            Comentarios
                                        </button>
                                        <button v-if="frase.status == 0" type="button"
                                            class="inline-block px-6 ml-3 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                                            @click="aceptStatus(frase.id)">
                                            Aprovar
                                        </button>
                                        <button v-if="frase.status == 0" type="button"
                                            class="inline-block px-6 ml-3 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                                            @click="rejectStatus(frase.id)">
                                            Rechazar
                                        </button>
                                        <button v-if="frase.status != 3 && frase.status != 0" type="button"
                                            class="inline-block px-6 ml-3 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" @click="delStatus(frase.id)">
                                            Quitar
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <!--content-->
            <div
                class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 class="text-3xl font-semibold">
                        Comentarios
                    </h3>
                    <button
                        class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        v-on:click="toggleModal()">
                        <span
                            class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                        </span>
                    </button>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto">
                    <h3> Frase : " {{ fraseModal }} "</h3>
                    <br>
                    <div class="flex justify-center">
                        <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"
                                v-for="(comment, index) in comments" :key="index">{{ comment.comentario }}</li>
                        </ul>
                    </div>
                    <br>
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <form>

                            <div class="form-group mb-6">
                                <label for="exampleInputPassword1"
                                    class="form-label inline-block mb-2 text-gray-700">Agregar Comentario</label>
                                <textarea
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlTextarea1" rows="3" placeholder="tu comentario"
                                    v-model="comment"></textarea>
                            </div>
                            <button type="button"
                                class="px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                                @click="addComment()">Agregar</button>
                        </form>
                    </div>

                </div>
                <!--footer-->
                <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                        class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button" v-on:click="toggleModal()">
                        Cerrar
                    </button>
                    <!-- <button
                        class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button" v-on:click="toggleModal()">
                        Save Changes
                    </button> -->
                </div>
            </div>
        </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '../stores/user'

export default {
    data() {
        return {
            frases: [],
            showModal: false,
            fraseModal: '',
            comments: [],
            comment: '',
            idFrase:0
        };
    },
    computed: function () { },
    created: function () {
        this.init();
    },
    methods: {
        async addComment() {
            let errors = [];
            if (this.comment.length <= 5) {
                errors.push("debe tener mas de 5 letras");
            }
            console.log(errors.length)
            if (errors.length == 0) {

                try {
                    const userStore = useUserStore()
                    // console.log(userStore.token)
                    // console.log(this.comment)

                    let res = await axios.post(
                        "add-comment", {
                        id_frase: this.idFrase,
                        id_user: userStore.userData.id,
                        comment: this.comment
                    },
                        {
                            headers: {
                                'Authorization': `Bearer ${userStore.token}`
                            }
                        }
                    );
                    // console.log(errors.length)

                    // console.log(res)
                    this.showModal = false;
                    this.init()
                } catch (error) {
                    console.log(error)
                }
            } else {

            }
        },
        toggleModal: function (index) {
            this.showModal = !this.showModal;
            if (this.showModal == false) {
                this.fraseModal = ''
                this.comments = []
            } else {
                this.fraseModal = this.frases[index].texto
                this.idFrase = this.frases[index].id 
                this.comments = this.frases[index].comments
            }
        },
        formatList(data) {
            let res = [];
            data.map(item => {
                let nameStatus = '';
                if (item.status == 0) {
                    nameStatus = 'Sin Asignar';
                } else if (item.status == 1) {
                    nameStatus = 'Activado';
                } else if (item.status == 2) {
                    nameStatus = 'Rechazado';
                } else if (item.status == 3) {
                    nameStatus = 'Retirado';
                }
                res.push({
                    id: item.id,
                    id_user_invite: item.id_user_invite,
                    texto: item.texto,
                    status: item.status,
                    statusName: nameStatus,
                    created_at: item.created_at,
                    updated_at: item.updated_at,
                    comments: item.comments
                });
            });
            return res
        },
        async init() {
            try {
                const userStore = useUserStore()
                let res = await axios.get(
                    "getall-frases",
                    {
                        headers: {
                            'Authorization': `Bearer ${userStore.token}`
                        }
                    }
                );
                // console.log(res.data);
                this.frases = this.formatList(res.data.data)
            } catch (error) {

            }
        },
        validEmail(email) {

            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        },
        async aceptStatus(id) {
            try {
                const userStore = useUserStore()
                let res = await axios.post(
                    "activate-frase", {
                    id_frase: id,
                    id_user: userStore.userData.id
                },
                    {
                        headers: {
                            'Authorization': `Bearer ${userStore.token}`
                        }
                    }
                );
                this.init()
            } catch (error) {

            }
        },
        async rejectStatus(id) {
            try {
                const userStore = useUserStore()
                let res = await axios.post(
                    "reject-frase", {
                    id_frase: id,
                    id_user: userStore.userData.id
                },
                    {
                        headers: {
                            'Authorization': `Bearer ${userStore.token}`
                        }
                    }
                );
                this.init()
            } catch (error) {

            }
        },
        async delStatus(id){
            try {
                const userStore = useUserStore()
                let res = await axios.post(
                    "delete-frase", {
                    id_frase: id,
                    id_user: userStore.userData.id
                },
                    {
                        headers: {
                            'Authorization': `Bearer ${userStore.token}`
                        }
                    }
                );
                this.init()
            } catch (error) {

            }
        }
    },
    mounted() {
        // console.log(`The initial count is ${this.count}.`);
    },
};
</script>