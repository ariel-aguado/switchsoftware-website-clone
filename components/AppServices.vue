<template>
  <section class="app-service w-full bg-surface">
    <div
      class="
      grid grid-cols-1 lg:grid-cols-2 justify-center gap-8
      max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl
      mx-auto px-4 py-16"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 order-2 lg:order-1">
        <div class="flex flex-col space-y-8">
          <AppCard class="hover:bg-teal-500 text-gray-900 hover:text-surface transition-colors duration-300">
            <template #icon>
              <IconUXUI />
            </template>
            <template #title>
              <h3 class="font-normal text-2xl">
                UI/UX
              </h3>
            </template>
            <template #description>
              <p>We help you design interfaces and experiences that seamlessly achieve the needs of your target users.</p>
            </template>
          </AppCard>
          <AppCard class="hover:bg-teal-500 text-gray-900 hover:text-surface transition-colors duration-300">
            <template #icon>
              <IconDevOps />
            </template>
            <template #title>
              <h3 class="font-normal text-2xl">
                DevOps
              </h3>
            </template>
            <template #description>
              <p>Implementation of modern practices and processes including Continuous Integration / Continuous deployment, and more.</p>
            </template>
          </AppCard>
        </div>
        <div class="flex flex-col space-y-8 lg:mt-20">
          <AppCard class="hover:bg-teal-500 text-gray-900 hover:text-surface transition-colors duration-300">
            <template #icon>
              <IconFrontendBackend />
            </template>
            <template #title>
              <h3 class="font-normal text-2xl">
                Front-end & Back-end
              </h3>
            </template>
            <template #description>
              <p>Modern technologies and dev practices, resulting in an easily maintainable and scalable code base - with performance always a priority.</p>
            </template>
          </AppCard>
          <AppCard class="hover:bg-teal-500 text-gray-900 hover:text-surface transition-colors duration-300">
            <template #icon>
              <IconTesting />
            </template>
            <template #title>
              <h3 class="font-normal text-2xl">
                Testing (QA)
              </h3>
            </template>
            <template #description>
              <p>Manual and Automated Testing to diagnose quality problems, and improve reliability of your system on all platforms.</p>
            </template>
          </AppCard>
        </div>
      </div>
      <div class="order-1 lg:order-2 lg:mt-28">
        <h2 class="text-[length:var(--font-size-lg)] text-gray-900">
          This is what we do
        </h2>
        <p class="text-gray-800 mt-2">
          Access to experienced, specialized software developer talent at lower costs.
          <br>
          <br>
          Bringing your own developers up-to-speed on new and old technologies, or recruiting developers in the ultra-competitive US talent market is time-consuming and costly.
          <br>
          <br>
          Access our experienced dev talent so you can focus on other priorities for your business growth.
        </p>
        <NuxtLink
          to="#"
          class="
          w-full sm:w-min h-12
          px-8 mt-4
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
          What we do
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.app-service {
  background-color: #f7f7f7;
  background-image: url('/background_what-we-do.png');
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-width: 1024px) {
    background-position: top left;
  }
}
</style>
