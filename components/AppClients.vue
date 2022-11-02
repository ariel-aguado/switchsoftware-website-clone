<script lang="ts" setup>
const logos = ref([
  { client: 'Allied world logo', path: '/logo-Allied-world.svg' },
  { client: 'Sodexo logo', path: '/logo-Sodexo.svg' },
  { client: 'TaTa logo', path: '/logo-TaTa.svg' },
  { client: 'BAS logo', path: '/logo-BAS.svg' },
  { client: 'MAH logo', path: '/logo-MAH.svg' },
  { client: 'SanRoque logo', path: '/logo-SanRoque.svg' },
  { client: 'Verifone logo', path: '/logo-Verifone.svg' },
  { client: 'BBVA logo', path: '/logo-BBVA.svg' },
  { client: 'SBI logo', path: '/logo-SBI.svg' },
  { client: 'Redpagos logo', path: '/logo-Redpagos.svg' },
  { client: 'Mapfre logo', path: '/logo-Mapfre.svg' },
  { client: 'BID logo', path: '/logo-BID.svg' },
  { client: 'FOMIN logo', path: '/logo-FOMIN.svg' },
  { client: 'BrigadeSociety logo', path: '/logo-BrigadeSociety.svg' },
  { client: 'G4S logo', path: '/logo-G4S.svg' },
  { client: 'Creative logo-Group', path: '/logo-Creative-Group.svg' },
  { client: 'Chargify logo', path: '/logo-Chargify.svg' },
])
</script>

<template>
  <div class="w-full bg-white px-4 sm:px-0">
    <div
      class="
      flex flex-col items-center
      max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl
      mx-auto py-24"
    >
      <h2 class="w-full text-[length:var(--font-size-lg)] text-gray-800 text-left sm:text-center">
        They made the switch
      </h2>
      <p class="w-full text-left sm:text-center mt-2">
        Trusted by many including global brands listed on the NYSE
      </p>
      <div class="flex flex-wrap justify-center items-center mt-10">
        <NuxtImg
          v-for="logo in logos"
          :key="logo.client"
          class="
          h-auto
          w-[50%] max-w-[50%]
          sm:w-[20%] sm:max-w-[20%]
          lg:w-[16.666667%] lg:max-w-[16.666667%]
          px-8 mb-8"
          :src="logo.path"
          :alt="logo.client"
          width="200"
          height="80"
        />
      </div>
    </div>
  </div>
</template>
