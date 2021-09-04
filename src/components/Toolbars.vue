<template>
  <v-app-bar app dense>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-btn @click="Del">Clear LocalStorage</v-btn>

    <v-spacer />
    <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" icon>
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Toolbars",
  computed: {},
  methods: {
    ...mapActions(["DELETE"]),
    Del() {
      // очистим хранилище на кнопку
      this.DELETE();
    },
  },
  data: () => ({}),
};
</script>
