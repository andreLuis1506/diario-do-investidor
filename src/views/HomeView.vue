<template>
  <section class="home">
    <h1 class="text-h3">
      {{ title }}
    </h1>
    <p class="text-subtitle-1 mb-6">{{ description }}</p>
    <v-row>
      <v-col>
        <span class="text-subtitle-2">
          <v-row>
            <v-col cols="2"> FIIS: </v-col>
            <v-col> {{ distribution.fiis }}% </v-col>
          </v-row>
          <v-row>
            <v-col cols="2"> Ações BR: </v-col>
            <v-col> {{ distribution.acoesBr }}% </v-col>
          </v-row>
          <v-row>
            <v-col cols="2"> Ações US: </v-col>
            <v-col> {{ distribution.acoesEua }}% </v-col>
          </v-row>
          <v-row>
            <v-col cols="2"> Caixa: </v-col>
            <v-col> {{ distribution.caixa }}% </v-col>
          </v-row>
        </span>
      </v-col>
      <v-col>
        <span>Aqui eu vou colocar um grafico se tudo der certo kkkk</span>
      </v-col>
    </v-row>
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
      <v-col cols="6">
        <base-text-field v-model="wallet" label="carteira" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>FIIS:</v-col>
      <v-col>
        {{ wallet * distribution.fiis }}
      </v-col>
      <v-col>
        <base-text-field v-model="currentFiis" label="Seu fiis atual" />
      </v-col>
      <v-col>
        {{ wallet * distribution.fiis - currentFiis }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>Ações BR:</v-col>
      <v-col>
        {{ wallet * distribution.acoesBr }}
      </v-col>
      <v-col>
        <base-text-field
          v-model="currentAcoesBr"
          label="Suas ações BR atuais"
        />
      </v-col>
      <v-col>
        {{ wallet * distribution.acoesBr - currentAcoesBr }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>Ações EUA:</v-col>
      <v-col>
        {{ wallet * distribution.acoesEua }}
      </v-col>
      <v-col>
        <base-text-field
          v-model="currentAcoesEua"
          label="Suas ações EUA atuais"
        />
      </v-col>
      <v-col>
        {{ wallet * distribution.acoesEua - currentAcoesEua }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>Caixa:</v-col>
      <v-col>
        {{ wallet * distribution.caixa }}
      </v-col>
      <v-col>
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

const title = "Modelo 1";
const description = "100% Renda variavel";
const distribution = {
  fiis: 0.33,
  acoesBr: 0.33,
  acoesEua: 0.33,
  caixa: 0.01,
};

const wallet = ref(0);
const currentFiis = ref(0);
const currentAcoesBr = ref(0);
const currentAcoesEua = ref(0);
const currentCaixa = ref(0);
</script>
