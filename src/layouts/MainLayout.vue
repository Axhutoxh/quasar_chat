<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

            <q-btn 
            v-if="$route.fullPath.includes('/chat')"
            v-go-back.single
            icon="arrow_back" 
            flat
            dense
            label="Back" />
        <q-toolbar-title class="absolute-center">
         {{ title }}
        </q-toolbar-title>
            <q-btn 
            v-if="!userDetails.userId"
            to="/auth"
            class="absolute-right q-pr-lg"
            icon="account_circle" 
            no-caps
            flat
            dense
            label="login" />

            <q-btn 
            v-else
            @click="logoutUser"
            class="absolute-right q-pr-lg"
            icon="account_circle" 
            no-caps
            flat
            dense>
            Logout <br>
            {{userDetails.name}}
            </q-btn>
      </q-toolbar>
    </q-header>

  

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed:{
    ...mapState('store',['userDetails']),
    title(){
      let current_path=this.$route.fullPath
      if (current_path == '/') return 'Pagger'
      else if (current_path == '/chat') return 'Chat'
      else if (current_path=='/auth') return 'Login'
    }
  },
  methods:{
    ...mapActions('store',['logoutUser'])
  }
}
</script>
<style lang="stylus">
  .q-toolbar
    .q-btn 
      line-height :1.2
  
</style>