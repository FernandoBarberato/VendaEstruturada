<script setup lang="ts">
import { assets } from '~/composables/useFigmaAssets'
</script>

<template>
  <section class="alert-banner" aria-live="polite">
    <img :src="assets.illustration" alt="" />
    <div>
      <h2>Encontramos 3 propostas para o seu cliente.</h2>
      <p>
        Nesse tipo de venda agrupamos cotas para compor uma carta que atenda clientes que buscam um crédito maior.
      </p>
    </div>
  </section>
</template>
