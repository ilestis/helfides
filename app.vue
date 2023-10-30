<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Helfides SA',
  meta: [
    { name: 'description', content: 'Omnia recte facere – Doing things properly' }
  ],
})
useSeoMeta({
  ogLocale: 'en_GB',
  ogType: 'website',
  ogTitle: 'Helfides SA',
  ogSiteName: 'Helfides SA',
  ogDescription: 'Omnia recte facere – Doing things properly - In this age of ever-increasing complexity, the administration of one’s personal or corporate affairs is a duty that is becoming heavier, more complicated and much more time-consuming each year. Sometimes, one can’t'
})

</script>

<template>
  <Head>
  </Head>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#eaeaea" />
    <NuxtPage />
  </NuxtLayout>
</template>