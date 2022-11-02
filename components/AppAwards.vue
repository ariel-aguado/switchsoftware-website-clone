<template>
  <section class="w-full bg-white">
    <div
      class="
      flex flex-col items-center
      max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl
      mx-auto px-4 pb-2"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="flex justify-center items-center mt-8 lg:mt-0 order-2 lg:order-1">
          <NuxtImg
            class="w-[60%] lg:w-3/4 h-auto transition-all"
            src="/clutch_img.png"
            alt="Clutch"
            width="691"
            height="741"
          />
        </div>
        <div class="order-1 lg:order-2">
          <div
            class="
            w-full
            px-4
            flex flex-col justify-center
            mt-10
            z-0"
          >
            <h2 class="max-w-sm text-[length:var(--font-size-lg)] text-gray-900 leading-[5rem]">
              Our Awards
            </h2>
            <p class="text-gray-800 mt-3">
              Clutch is an international review curation platform that collects feedback from businesses about other companies that they’ve worked with. Using a formula that includes online reviews as well as other factors, they rank companies based on location and industry.
              <br>
              <br>
              Switch sees third-party ‘verification’ companies, like Clutch, as key to bringing transparency to the global software outsourcing industry.
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
                Read More
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
                See more on clutch
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quotes -->
    <AppCarousel />
  </section>
</template>

<style lang="scss">
.swiper-pagination {
  position: relative !important;
  text-align: left !important;
  margin-top: 2rem !important;

  & .swiper-pagination-bullet {
    width: .8rem;
    height: .8rem;
    cursor: pointer;
  }

  & .swiper-pagination-bullet-active {
    background: #ff69b4;
    transition: box-shadow .2s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      --tw-ring-color: theme('colors.pink.500');
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-color: #f8fafc;
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000) !important;
    }
  }
}
</style>
