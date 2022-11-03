<template>
  <section class="w-full bg-[#3d3d3d]">
    <NuxtImg
      class="w-full bg-white mb-[-1px] pointer-events-none"
      src="/stoke-contact.svg"
      alt="Stoke contact"
      width="1920"
      height="201"
    />
    <div
      class="
      flex flex-col items-center
      max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl
      mx-auto py-6"
    >
      <div class="w-full flex flex-col md:flex-row md:flex-wrap p-4 sm:p-0 mb-20 sm:mb-28">
        <div
          class="
          flex justify-center flex-[0_0_auto]
          md:flex-[0_0_41.666667%] md:max-w-[41.666667%]
          lg:justify-start items-center lg:flex-[0_0_58.333333%] lg:max-w-[58.333333%]"
        >
          <NuxtImg
            class="w-full max-w-[600px] h-auto transition-all"
            src="/logo-Microsoft-Partner.svg"
            alt="Microsoft Partner"
            width="1951"
            height="731"
          />
        </div>
        <div
          class="
          w-full flex flex-col sm:flex-row md:flex-wrap justify-center md:justify-end items-center md:space-x-8
          md:flex-[0_0_58.333333%] md:max-w-[58.333333%]
          lg:flex-[0 0 41.666667%] lg:max-w-[41.666667%]"
        >
          <NuxtImg
            class="max-w-[169px] h-auto transition-all"
            src="/B2B_Companies_Uruguay_2021.webp"
            alt="Microsoft Partner"
            width="350"
            height="378"
          />
          <NuxtImg
            class="max-w-[168px] h-auto transition-all"
            src="/logo-CSM.png"
            alt="Logo CSM"
            width="300"
            height="300"
          />
        </div>
      </div>
    </div>
    <div class="w-full bg-neutral-800 py-6">
      <div class="grid grid-cols-2 max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-0">
        <ul class="flex justify-start items-center space-x-3">
          <li>
            <a href="https://www.instagram.com/switchsoftware/?hl=es-la" target="_blank" rel="noreferrer" aria-label="Switch Software Instagram">
              <Icon name="carbon:logo-instagram" class="w-6 h-6 text-white hover:text-teal-500 transition-colors" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/switch-software-solutions?trk=company_logo" target="_blank" rel="noreferrer" aria-label="Switch Software Linkedin">
              <Icon name="carbon:logo-linkedin" class="w-6 h-6 text-white hover:text-teal-500 transition-colors" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/SwitchSoftwareSolutions/?fref=ts" target="_blank" rel="noreferrer" aria-label="Switch Software Facebook">
              <Icon name="carbon:logo-facebook" class="w-6 h-6 text-white hover:text-teal-500 transition-colors" />
            </a>
          </li>
        </ul>
        <div class="flex justify-end">
          <p class="text-white">
            Copyright © Switch Software Solutions
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
