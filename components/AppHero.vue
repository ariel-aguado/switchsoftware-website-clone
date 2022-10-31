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
        src="/sw-hero-video.m4v"
        muted
        loop
        autoplay
        class="w-full h-screen object-cover contrast-[90%] grayscale brightness-[60%] z-0"
      />
    </div>
    <div
      class="
      col-start-1 col-end-2 row-start-1 row-end-4 w-full
      max-w-6xl mx-auto
      px-6
      flex flex-col justify-center
      mt-24 sm:mt-0
      z-0"
    >
      <h1 class="max-w-sm text-fluid_3xl leading-[5rem] text-white">
        Nearshore Custom Application Development
      </h1>
      <p class="text-white mt-3">
        Make The Switch to Collaboration
      </p>
      <button
        class="
        w-min
        whitespace-nowrap
        bg-teal-400 hover:bg-teal-500
        px-10 py-4
        rounded-full
        text-base text-gray-900 uppercase
        mt-6
        cursor-pointer
        transition-colors"
      >
        What we do
      </button>
    </div>
    <NuxtImg
      src="/stoke-about.svg"
      class="w-full col-start-1 col-end-2 row-start-3 row-end-4 z-10 mb-[-5px]"
    />
  </section>
</template>
