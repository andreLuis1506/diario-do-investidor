<template>
  <v-app>
    <v-main>
      <router-link to="/guideline">Guideline</router-link>
      <router-view />
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
