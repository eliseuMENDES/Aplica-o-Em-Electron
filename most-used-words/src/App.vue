<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>
    <v-main>
    <HOM3 />
    </v-main>
    </v-app>  
</template>

<script>
import HOM3 from './components/HOM3'

export default {
  name: 'App',

  components: {
    HOM3
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
