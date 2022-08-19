<template>
    <Navbar></Navbar>
    <FrasesAdmin v-if="role == 1"></FrasesAdmin>
    <FrasesInvite v-else-if="role == 2"></FrasesInvite>
</template>

<script>
import FrasesAdmin from '../components/FrasesAdmin.vue'
import FrasesInvite from '../components/FrasesInvite.vue'
import Navbar from '../components/Navbar.vue'
import {useUserStore} from '../stores/user'

export default {
    
    data() {
        return {
            role:0
        };
    },
    components:{
    FrasesAdmin,
    FrasesInvite,
    Navbar
},
    computed: function () { },
    created: function () {
        const userStore = useUserStore()
        this.role = userStore.userData.id_role
        // console.log(this.role)
    },
    methods: {
        
    }
};
</script>