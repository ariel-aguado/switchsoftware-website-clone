<template>
  <header class="w-full fixed top-0 z-20">
    <div class="w-full bg-white">
      <div class="h-16 lg:h-24 flex justify-between max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto p-4 transition-all">
        <slot name="logo" />
        <slot name="desktop-navigation" />
        <slot name="mobile-navigation" />
      </div>
    </div>
    <NuxtImg
      src="/stoke-navbar.svg"
      alt="Stoke navbar"
      class="max-w-full h-auto mb-[-10.1%] lg:mb-[-7.1%] lg:mt-[-6px] pointer-events-none"
    />
  </header>
</template>
