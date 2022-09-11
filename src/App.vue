<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Diario do investidor</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer :expand-on-hover="true" :rail="true">
      <v-list>
        <v-list-item prepend-icon="mdi-home" value="home" to="/">
          <router-link to="/guideline">Guideline</router-link>
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Shared with me"
          value="shared"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
});
</script>
