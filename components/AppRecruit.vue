<template>
  <section class="w-full bg-surface">
    <div
      class="
      flex flex-col items-center
      max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl
      mx-auto px-4 pt-16"
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
          class="
          w-full max-w-full
          lg:w-[33.333333%] lg:max-w-[33.333333%] hover:scale-105 lg:hover:scale-110
          transition-transform duration-200"
        >
          <template #icon>
            <IconRealTime />
          </template>
          <template #title>
            <h3 class="text-2xl">
              Real-time, Real feedback
            </h3>
          </template>
          <template #description>
            <p>Our developers are encouraged to be transparent, and speak openly about viability of projects or the task at hand.</p>
          </template>
        </AppCard>
        <AppCard
          class="
          w-full max-w-full
          lg:w-[33.333333%] lg:max-w-[33.333333%] hover:scale-105 lg:hover:scale-110
          transition-transform duration-200"
        >
          <template #icon>
            <IconFrontendBackend />
          </template>
          <template #title>
            <h3 class="text-2xl">
              Proven Dev Talent
            </h3>
          </template>
          <template #description>
            <p>Easily recruit modern dev talent. Stop dealing with headaches from junior developers lacking fundamentals like testing, security, and task estimation.</p>
          </template>
        </AppCard>
        <AppCard
          class="
          w-full max-w-full
          lg:w-[33.333333%] lg:max-w-[33.333333%] hover:scale-105 lg:hover:scale-110
          transition-transform duration-200"
        >
          <template #icon>
            <IconInPersonMeetings />
          </template>
          <template #title>
            <h3 class="text-2xl">
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
