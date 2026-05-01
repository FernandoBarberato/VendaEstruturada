<script setup lang="ts">
import { assets } from '~/composables/useFigmaAssets'
</script>

<template>
  <header class="app-header">
    <div class="content-wrap app-header__inner">
      <a class="app-header__logo" href="#" aria-label="Convert +">
        <span>Convert</span>
        <b>+</b>
      </a>

      <div class="app-header__actions">
        <button class="cart-button" type="button" aria-label="Carrinho com 3 itens">
          <img :src="assets.cart" alt="" />
          <span>3</span>
        </button>

        <button class="brand-toggle" type="button" aria-label="Selecionar perfil">
          <span class="brand-toggle__mark">
            <img :src="assets.brandIcon" alt="" />
          </span>
          <img class="brand-toggle__chevron" :src="assets.chevron" alt="" />
        </button>

        <div class="user-menu">
          <img class="user-menu__avatar" :src="assets.avatar" alt="Fernando Barberato" />
          <div class="user-menu__copy">
            <strong>Fernando Barberato</strong>
            <span>PV: 002189</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
