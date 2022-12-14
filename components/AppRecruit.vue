<script lang="ts" setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init()
})
</script>

<template>
  <section class="w-full bg-surface">
    <div
      class="
      flex flex-col items-center
      max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl
      mx-auto px-4 pt-16 pb-2"
    >
      <h2 class="w-full text-[length:var(--font-size-lg)] text-gray-800 text-left sm:text-center">
        Recruit. Re-Tool.
        <br>
        Retain Talent.
      </h2>
      <div
        class="
        w-full flex flex-col space-y-8 space-x-0
        lg:flex-row justify-center items-center lg:space-x-8 lg:space-y-0 mt-4"
      >
        <AppCard
          data-aos="fade-up"
          data-aos-offset="100"
          class="
          aos-init aos-animate
          w-full max-w-full
          pt-8 pb-12
          lg:w-[33.333333%] lg:max-w-[33.333333%] hover:scale-105 lg:hover:scale-110
          transition-transform duration-200"
        >
          <template #icon>
            <IconRealTime class="text-gray-900" />
          </template>
          <template #title>
            <h3 class="font-normal text-2xl text-gray-900">
              Real-time, Real feedback
            </h3>
          </template>
          <template #description>
            <p>Our developers are encouraged to be transparent, and speak openly about viability of projects or the task at hand.</p>
          </template>
        </AppCard>
        <AppCard
          data-aos="fade-up"
          data-aos-offset="200"
          class="
          aos-init aos-animate
          w-full max-w-full
          pt-8 pb-12
          lg:w-[33.333333%] lg:max-w-[33.333333%] hover:scale-105 lg:hover:scale-110
          transition-transform duration-200"
        >
          <template #icon>
            <IconFrontendBackend class="text-gray-900" />
          </template>
          <template #title>
            <h3 class="font-normal text-2xl text-gray-900">
              Proven Dev Talent
            </h3>
          </template>
          <template #description>
            <p>Easily recruit modern dev talent. Stop dealing with headaches from junior developers lacking fundamentals like testing, security, and task estimation.</p>
          </template>
        </AppCard>
        <AppCard
          data-aos="fade-up"
          data-aos-offset="250"
          class="
          aos-init aos-animate
          w-full max-w-full
          pt-8 pb-12
          lg:w-[33.333333%] lg:max-w-[33.333333%] hover:scale-105 lg:hover:scale-110
          transition-transform duration-200"
        >
          <template #icon>
            <IconInPersonMeetings class="text-gray-900" />
          </template>
          <template #title>
            <h3 class="font-normal text-2xl text-gray-900">
              In-person Meetings
            </h3>
          </template>
          <template #description>
            <p>Increase collaboration by meeting in-person, about how we can improve our service, in order to minimize your risk.</p>
          </template>
        </AppCard>
      </div>
      <NuxtLink
        to="#"
        class="
          w-full sm:w-min h-12
          px-8 mt-12
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
        How we work
      </NuxtLink>
    </div>
    <NuxtImg
      class="w-full bg-white pointer-events-none"
      src="/stoke-recruit-re-tool.svg"
      alt="Stoke recruit re-tool"
      width="1920"
      height="179"
    />
  </section>
</template>
