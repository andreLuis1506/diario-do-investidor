<template>
  <v-row>
    <v-col cols="3">
      <v-select v-model="selectedModel" :items="items" variant="underlined" />
    </v-col>
    <v-col cols="1"></v-col>
  </v-row>
  <p class="text-subtitle-1 mb-6">{{ currentModel.description }}</p>
  <v-row>
    <v-col>
      <span class="">
        <v-row>
          <v-col cols="3"> FII: </v-col>
          <v-col> {{ currentModel.fii * 100 }}% </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> Ações BR: </v-col>
          <v-col> {{ currentModel.acoesBR * 100 }}% </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> Ações EUA: </v-col>
          <v-col> {{ currentModel.acoesEUA * 100 }}% </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> Caixa: </v-col>
          <v-col> {{ currentModel.caixa * 100 }}% </v-col>
        </v-row>
      </span>
    </v-col>
    <v-col>
      <span>Aqui eu vou colocar um grafico se tudo der certo kkkk</span>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { InvestorProfile } from "@/kinds/InvestorProfile";
import { computed, ref } from "vue";

const items = InvestorProfile.profileChoices;
const selectedModel = ref("profile1");

const currentModel = computed(() => InvestorProfile[selectedModel.value]);
</script>
