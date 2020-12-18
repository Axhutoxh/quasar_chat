<template>
    <q-form @submit="submitForm">
      
      <q-input
        v-if="tab == 'Register'" 
        class="q-mb-md"
        v-model="fromData.name"
        outlined
        label="Name" /> 

      <q-input 
        v-model="fromData.email"
        class="q-mb-md"
        type="email"
        outlined
        label="E-mail" />  

      <q-input 
        class="q-mb-md"
        v-model="fromData.password"
        type="password"
        outlined
        label="Password" /> 
      <div class="row">
        <q-space />
        <q-btn 
            color="primary" 
            type="submit"
            :label="tab" 
            />
      
      </div>

    </q-form>

</template>
<script>
import {mapActions} from 'vuex'
export default {
    props:['tab'],
    data() {
        return {
            fromData:{
                name:'',
                email:'test@a.com',
                password:'123321'
            }
        }
    },
    methods:{
        ...mapActions('store',['registerUser','loginUser']),
        submitForm(){
            if(this.tab=='Login'){
                this.loginUser(this.fromData)
            }else{
                console.log("Register the")
                this.registerUser(this.fromData)
            }
        }
    }
}
</script>