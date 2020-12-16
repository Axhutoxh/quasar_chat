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
            to="/auth"
            class="absolute-right q-pr-lg"
            icon="account_circle" 
            no-caps
            flat
            dense
            label="login" />
      </q-toolbar>
    </q-header>

  

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'


export default {
  computed:{
    title(){
      let current_path=this.$route.fullPath
      if (current_path == '/') return 'Pagger'
      else if (current_path == '/chat') return 'Chat'
      else if (current_path=='/auth') return 'Login'
    }
  },
  methods:[

  ]
}
</script>
