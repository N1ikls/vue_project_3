<template>
  <v-app>
    <toolbars/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Toolbars from './components/Toolbars.vue';
export default {
  name: "App",

  components: {
    Toolbars,
  }
};
</script>
