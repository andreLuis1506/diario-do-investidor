<template>
  <section class="home">
    <model-selector v-model="investorModel" />
    <v-row>
      <v-col>
        <v-divider />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <h1 class="text-h3">Sua carteira</h1>
        <p class="text-subtitle-2">
          Aqui você preenche quanto sua carteira de investimentos tem a divisão
          é feita de acordo com o modelo de investidor que escolher. Um calculo
          de porcentagem simples e facil.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <base-text-field v-model="wallet" label="carteira" />
      </v-col>
    </v-row>
    <v-row :dense="true">
      <v-col cols="1">FII:</v-col>
      <v-col cols="1">
        {{ wallet * distribution.fiis }}
      </v-col>
      <v-col cols="2">
        <base-text-field v-model="currentFiis" label="Seu fii atual" />
      </v-col>
      <v-col>
        {{ wallet * distribution.fiis - currentFiis }}
      </v-col>
    </v-row>
    <v-row :dense="true">
      <v-col cols="1">Ações BR:</v-col>
      <v-col cols="1">
        {{ wallet * distribution.acoesBr }}
      </v-col>
      <v-col cols="2">
        <base-text-field
          v-model="currentAcoesBr"
          label="Suas ações BR atuais"
        />
      </v-col>
      <v-col>
        {{ wallet * distribution.acoesBr - currentAcoesBr }}
      </v-col>
    </v-row>
    <v-row :dense="true">
      <v-col cols="1">Ações EUA:</v-col>
      <v-col cols="1">
        {{ wallet * distribution.acoesEua }}
      </v-col>
      <v-col cols="2">
        <base-text-field
          v-model="currentAcoesEua"
          label="Suas ações EUA atuais"
        />
      </v-col>
      <v-col>
        {{ wallet * distribution.acoesEua - currentAcoesEua }}
      </v-col>
    </v-row>
    <v-row :dense="true">
      <v-col cols="1">Caixa:</v-col>
      <v-col cols="1">
        {{ wallet * distribution.caixa }}
      </v-col>
      <v-col cols="2">
        <base-text-field v-model="currentCaixa" label="Caixa atual" />
      </v-col>
      <v-col>
        {{ wallet * distribution.caixa - currentCaixa }}
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseTextField from "@/components/BaseTextField.vue";
import ModelSelector from "@/components/calculator/ModelSelector.vue";

const distribution = {
  fiis: 0.33,
  acoesBr: 0.33,
  acoesEua: 0.33,
  caixa: 0.01,
};

const investorModel = ref("conservador");

const wallet = ref(0);
const currentFiis = ref(0);
const currentAcoesBr = ref(0);
const currentAcoesEua = ref(0);
const currentCaixa = ref(0);
</script>
