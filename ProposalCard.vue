<script setup lang="ts">
import { computed } from 'vue'
import { assets } from '~/composables/useFigmaAssets'

const props = defineProps<{
  asset: 'home' | 'car'
  type: string
  score: string
  filledStars: number
  recommendation: string
}>()

const imageSrc = computed(() => (props.asset === 'home' ? assets.homeImage : assets.carImage))
const iconSrc = computed(() => (props.asset === 'home' ? assets.homeIcon : assets.carIcon))
</script>

<template>
  <article class="proposal-card" tabindex="0">
    <div class="proposal-card__media">
      <img :src="imageSrc" alt="" />
      <span class="proposal-card__badge proposal-card__badge--left">Tabela B</span>
      <span class="proposal-card__badge proposal-card__badge--right">
        <img :src="iconSrc" alt="" />
        {{ type }}
      </span>
    </div>

    <div class="proposal-card__body">
      <div class="proposal-card__credit">
        <span>Valor do crédito</span>
        <strong>R$ 3.000.000,00</strong>
        <small>10 cotas <i></i> 5 grupos</small>
      </div>

      <div class="proposal-card__rating">
        <StarRating :filled="filledStars" />
        <p>
          <strong>{{ score }} de 5</strong>
          <i></i>
          <span>Proximidade da busca</span>
        </p>
      </div>

      <dl class="proposal-card__features">
        <div>
          <dt>Parcela mensal</dt>
          <dd>R$ 13.586,00</dd>
        </div>
        <div>
          <dt>Prazo das cotas</dt>
          <dd>80 a 120 meses</dd>
        </div>
        <div>
          <dt>Média de lance</dt>
          <dd>45,01% a 60,23%</dd>
        </div>
        <div>
          <dt>Valor do lance</dt>
          <dd>R$ 834.00,00</dd>
        </div>
      </dl>

      <div class="proposal-card__info">
        <img :src="assets.info" alt="" />
        <div>
          <strong>Recomendação</strong>
          <p>{{ recommendation }}</p>
        </div>
      </div>
    </div>
  </article>
</template>
