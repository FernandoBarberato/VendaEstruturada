<script setup lang="ts">
const filters = [
  { label: 'Bem escolhido', value: 'Imóvel' },
  { label: 'Tabela', value: 'Tabela B' },
  { label: 'Valor do crédito desejado', value: 'R$ 3.000.000,00' },
  { label: 'Valor máximo da parcela', value: 'R$ 30.000,00' },
  { label: 'Valor disponível para lance', value: 'R$ 1.500.000,00' },
  { label: 'Prazo máximo do grupo', value: 'R$ 120 meses' },
  { label: 'Situação do grupo', value: 'Qualquer' }
]

const proposals = [
  {
    asset: 'home' as const,
    type: 'Imóvel',
    score: '4.7',
    filledStars: 4,
    recommendation: 'Pacote que oferece a menor parcela possível, de acordo com o valor do crédito solicitado.'
  },
  {
    asset: 'home' as const,
    type: 'Imóvel',
    score: '4.2',
    filledStars: 4,
    recommendation: 'Pacote que oferece o menor lance possível, de acordo com o valor do crédito solicitado.'
  },
  {
    asset: 'car' as const,
    type: 'Automóvel',
    score: '3.9',
    filledStars: 3,
    recommendation: 'Pacote que oferece crédito, parcela, lance e prazo mais próximo do desejado.'
  }
]
</script>

<template>
  <main class="page-shell">
    <AppHeader />

    <section class="content-wrap page-heading" aria-labelledby="page-title">
      <h1 id="page-title">Nova simulação</h1>
    </section>

    <section class="content-wrap page-breadcrumb">
      <BreadcrumbTrail />
    </section>

    <FilterSummary class="content-wrap" :items="filters" />

    <AlertBanner class="content-wrap" />

    <section class="content-wrap proposals-grid" aria-label="Propostas encontradas">
      <ProposalCard
        v-for="proposal in proposals"
        :key="`${proposal.type}-${proposal.score}`"
        v-bind="proposal"
      />
    </section>
  </main>
</template>
