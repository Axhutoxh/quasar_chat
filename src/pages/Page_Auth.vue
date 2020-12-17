<template>
  <q-page class="flex q-pa-md bg-grey-2">
  <q-card class="full-width">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="Login" label="Login" />
          <q-tab name="Register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Login">
            <login-register :tab='tab' />
          </q-tab-panel>

          <q-tab-panel name="Register">
          <login-register :tab='tab' />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      tab: 'Login'
    }
  },
  components:{
    'login-register':require('components/LoginRegister').default
  }
}

</script>

<style lang="">
  
</style>