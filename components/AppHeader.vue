<template>
  <header class="w-full fixed top-0 z-20">
    <div class="w-full bg-white">
      <div class="h-24 flex justify-between max-w-6xl mx-auto p-6">
        <slot name="logo" />
        <slot name="desktop-navigation" />
        <slot name="mobile-navigation" />
      </div>
    </div>
    <NuxtImg src="/stoke-navbar.svg" alt="Stoke navbar" class="w-full mt-[-5px]" />
  </header>
</template>
