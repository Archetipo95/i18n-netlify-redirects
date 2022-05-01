<template>
  <div>
    <h1>{{ $t("welcome") }}</h1>

    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
    <nuxt-link :to="switchLocalePath('it')">Italiano</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
};
</script>
