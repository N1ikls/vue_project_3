<template>
  <v-app-bar app dense>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-spacer />
    <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" icon>
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Toolbars",

  data: () => ({}),
};
</script>
