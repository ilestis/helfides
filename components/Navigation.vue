<template>
  <header class="flex flex-col">
    <div>
      <img v-bind:src="headerImg()" class="w-full h-auto" />
    </div>
    <nav class="flex gap-5 items-center p-4 bg-white">
      <div class="grow">
        <NuxtLink to="/">
          <img src="/helfides.png" alt="Helfides SA" />
        </NuxtLink>
      </div>
      <div class="flex gap-5">
        <NuxtLink to="/about">About Us</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/compliance">Compliance</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
function headerImg() {
  let options = [
      'geneva',
      'lavaux',
      'lugano',
      'matterhorn',
      'zuerich'
  ];

  let randomElement = options[Math.floor(Math.random() * options.length)];
  return '/bgs/' + randomElement + '.png';
}
</script>