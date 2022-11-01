<script lang="ts" setup>
const isDev = process.env.NODE_ENV === 'development'
const videoUrl = isDev ? '/sw-hero-video.m4v' : 'https://res.cloudinary.com/dkdfpm2og/video/upload/v1667253619/switch-assets/sw-hero-video_rje65h.mp4'
</script>

<template>
  <section class="w-full min-h-screen grid grid-cols-1 grid-rows-[min-content_1fr_min-content]">
    <AppHeader class="col-start-1 col-end-2 row-start-1 row-end-2 z-10">
      <template #logo>
        <AppLogo />
      </template>
      <template #desktop-navigation>
        <AppDesktopNavigation />
      </template>
      <template #mobile-navigation>
        <AppMobileNavigation />
      </template>
    </AppHeader>
    <div class="col-start-1 col-end-2 row-start-1 row-end-4 bg-gray-800 flex justify-center items-center">
      <video
        :src="videoUrl"
        muted
        loop
        autoplay
        class="w-full h-screen object-cover contrast-[90%] grayscale brightness-[60%] z-0"
      />
    </div>
    <div
      class="
      col-start-1 col-end-2 row-start-1 row-end-4 w-full
      max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto
      px-4
      flex flex-col justify-center
      mt-24 lg:mt-0
      z-0"
    >
      <h1 class="max-w-sm text-[length:var(--font-size-3xl)] leading-[5rem] text-white">
        Nearshore Custom Application Development
      </h1>
      <p class="text-white mt-3">
        Make The Switch to Collaboration
      </p>
      <NuxtLink
        to="#"
        class="
        w-min h-12
        px-8 mt-6
        text-gray-900 font-semibold uppercase
        rounded-full
        flex items-center justify-center
        whitespace-nowrap
        bg-teal-400
        transition-colors
        hover:bg-teal-300
        active:bg-teal-400
        focus:outline-none
        focus:ring-2
        focus:ring-teal-300
        focus:ring-offset-2
        focus:ring-offset-teal-900"
      >
        What we do
      </NuxtLink>
    </div>
    <NuxtImg
      class="w-full col-start-1 col-end-2 row-start-3 row-end-4 z-[5] mb-[-5%] mt-[-13%]"
      src="/stoke-about.svg"
      alt="Stoke about"
      width="1920"
      height="268"
    />
  </section>
</template>
