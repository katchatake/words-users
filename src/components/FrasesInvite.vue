<template>
    <div class="container mt-5 px-4">
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
                                        <button type="button"
                                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                            Comentarios
                                        </button>
                                        <button type="button"
                                            class="inline-block px-6 ml-3 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
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
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            frases: []
        };
    },
    computed: function () { },
    created: function () {
        this.init();
    },
    methods: {
        async init() {
            try {
                let res = await axios.get(
                    "getall-frases",
                    {
                        headers: {
                            'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZWU5MThhMmQzZWYzNDkxOGYyZmM2YTJiYzdlM2UzYjMxZTYzMzM4ODg1N2VkMDJlMDUxMDhkM2Q2NTA0OGRhM2Y2NjQ2OGU1NzVlNzBlM2QiLCJpYXQiOjE2NjA4NDAyNDIuMDI1ODMxLCJuYmYiOjE2NjA4NDAyNDIuMDI1ODM2LCJleHAiOjE2OTIzNzYyNDIuMDA4OTQ2LCJzdWIiOiI3NCIsInNjb3BlcyI6W119.cFsydjP0crJuwSBR4OFvB8Q99Wep5cwAHnuw0afiLp-pdnSFHvNrehWduYzahk2QZkqz9--07ECHGNmvzlAe4mCK6CPROMxY5GhcRVvRWFwGP4okih4qvqO25Uz_MZeI6OqgpXroEK-SMcjipb8wSxgY6i_qnkRl3ltn3M5h9SbOt8UUjv70YS9As5oRDtMX-i9roUB6Yv2SfGh7FA82SkH--EJ2C5Irdm4gr035YSDiR8TXzQqOyGSFchnt8JoR7D6RSVXf-b57HlsIslaYmqyubFTqO9gykXSrIizheFfL34lYHMmUlP6BvsO9sL5DImya8N8YqIucD3eyHefennOFff52Bd5DDnJKzg3dQDxvkeGdwjIbKwkTR9g-uSvufzV9RUbdvhb7NdyeG7iIvCHVMAoZ9TJOcDb3zVmHGKr6eDRFyKyxgNt6_ttAgIxbograrUMIjh0z8Gf9dnkYOelnewYBz54UWZA4s4o_rCO4MXd2eeyqoyU9f-Nz3b_qxv45aROhChJcdOjzeiaIJQQvoU6fd1Q1qa-42XrH06Jxlqm3hRDfdUSeudxmJptBbM-VEdP5cTk3CUko7KTbA-DdnLkINZR04JQMfC-tDCFDUDKWo3dpArSGITPAcZJXNuZQFqreQRfmvEBphKY0FVgv2LFwLTqTmrhZmrlRh6o`
                        }
                    }
                );
                console.log(res.data);
                this.frases = res.data.data
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
    },
    mounted() {
        console.log(`The initial count is ${this.count}.`);
    },
};
</script>