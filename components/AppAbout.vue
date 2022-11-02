<template>
  <section class="w-full bg-surface flex justify-center items-center">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-24">
      <div>
        <h2 class="text-[length:var(--font-size-lg)] text-gray-800">
          Modern architectures, Agile methodologies, 100% Custom Dev Teams
        </h2>
        <p class="text-gray-800 mt-2">
          Access to experienced, specialized software developers who integrate directly with your team and dev processes, just +1 hour ahead of ET.
        </p>
        <div class="flex flex-wrap items-center mt-8">
          <NuxtLink
            to="#"
            class="
            w-full sm:w-min h-12
            px-8 mr-0 sm:mr-4 mb-4
            text-sm text-white font-semibold uppercase
            rounded-full
            flex items-center justify-center
            whitespace-nowrap
            bg-violet-600
            transition-colors
            hover:bg-violet-500
            active:bg-violet-600
            focus:outline-none
            focus:ring-2
            focus:ring-violet-600
            focus:ring-offset-2
            focus:ring-offset-violet-50"
          >
            About Us
          </NuxtLink>
          <NuxtLink
            to="#"
            class="
            w-full sm:w-min h-12
            px-8 mb-4
            text-sm text-white font-semibold uppercase
            rounded-full
            flex items-center justify-center
            whitespace-nowrap
            bg-violet-600
            transition-colors
            hover:bg-violet-500
            active:bg-violet-600
            focus:outline-none
            focus:ring-2
            focus:ring-violet-600
            focus:ring-offset-2
            focus:ring-offset-violet-50"
          >
            Our Service
          </NuxtLink>
        </div>
      </div>
      <div class="hidden lg:block mt-[-14rem] z-[5]">
        <svg viewBox="0 0 335 325" width="475px">
          <clipPath id="carrers">
            <path fill="#606060" d="M302.9,298.65c57.84-61.52,7.85-221.58-81.28-276.73C132.5-33.23-21.3,75.28,8.56,173.45                        S245.06,360.19,302.9,298.65z" />
          </clipPath>
          <image xlink:href="/img_home.jpg" clip-path="url(#carrers)" class="h-[330px]" />
        </svg>
      </div>
    </div>
  </section>
</template>
