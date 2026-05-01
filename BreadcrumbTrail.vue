<script setup lang="ts">
import { assets } from '~/composables/useFigmaAssets'
</script>

<template>
  <nav class="breadcrumb" aria-label="Caminho da página">
    <a class="breadcrumb__back" href="#" aria-label="Voltar">
      <img :src="assets.back" alt="" />
    </a>
    <ol>
      <li><a href="#">Nova simulação</a></li>
      <li aria-current="page">Busca realizada</li>
    </ol>
  </nav>
</template>
