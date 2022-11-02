<script lang="ts" setup>
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = ref([Autoplay, Pagination])
const pagination = ref({
  clickable: true,
  renderBullet: (index: string, className: string) => `<span class="${className}"></span>`,
})
</script>

<template>
  <div class="max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto mt-20">
    <NuxtImg
      class="w-48 h-auto mb-8"
      src="/quotes.svg"
      alt="Quotes"
      width="292"
      height="167"
    />
    <div class="px-8 sm:px-16">
      <Swiper
        :modules="modules"
        :pagination="pagination"
        :autoplay="{ delay: 5000 }"
        :slides-per-view="1"
        :space-between="50"
      >
        <SwiperSlide>
          <p class="text-gray-800 leading-8">
            Switch Software Solutions is open and honest. They aren’t afraid to confront or present alternate suggestions and solutions when necessary. They take ownership and treat our projects as their own. Their team is professional and easy to communicate with. We’re very happy with them.
          </p>
          <p class="font-merriweather text-2xl text-gray-900 font-semibold mt-14">
            Igor Polouektov
          </p>
          <p class="text-gray-500 mt-1">
            President of Insurance Services, Allied World Assurance Co.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p class="text-gray-800 leading-8">
            Their skills, their efficiency, and their quick responses to requests stand out. We have a very good relationship with them, they are very proactive, and they always provide great advice.They take very good care of their employees and motivate and train them. This is what makes them stand out from other companies.
          </p>
          <p class="font-merriweather text-2xl text-gray-900 font-semibold mt-14">
            Diego Maye
          </p>
          <p class="text-gray-500 mt-1">
            Site Operations & LAC Cloud Engineering Manager, Verifone
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p class="text-gray-800 leading-8">
            I think what really separates them from traditional development companies is how much they seem to care about us. They consistently simplify the process and handle the development without making our lives difficult. We have seen a big bump in our engagement that I think can be credited to the work that Switch did. It has been a great experience working with them so far, and I am looking forward to continuing to do so in the future.
          </p>
          <p class="font-merriweather text-2xl text-gray-900 font-semibold mt-14">
            Max Ibata-Arens
          </p>
          <p class="text-gray-500 mt-1">
            Business Development Manager, Logisyn Advisors
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p class="text-gray-800 leading-8">
            They have excellent developers and project managers who do high-quality work. They were very responsive. Also, the code they produced is very high quality and written in a way that makes it easy for us to maintain it long-term. The new Javascript library they have developed has been a huge hit with both existing and new customers.
          </p>
          <p class="font-merriweather text-2xl text-gray-900 font-semibold mt-14">
            Keith Kacin
          </p>
          <p>Product Manager, Chargify</p>
        </SwiperSlide>
        <SwiperSlide>
          <p class="text-gray-800 leading-8">
            The support of all the company’s staff to our project is impressive. If some details have been missed, they have worked on them to solve them out.
          </p>
          <p class="font-merriweather text-2xl text-gray-900 font-semibold mt-14">
            Guillermo Jacobi
          </p>
          <p class="text-gray-500 mt-1">
            CTO, Zonamerica
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p class="text-gray-800 leading-8">
            While building our M&A firm I met a fantastic development company based in Uruguay, that helped me on a few tech projects: Switch Software Solutions. They have incredible knowledge and domain expertise while keeping a reasonable cost. Even more important is their high integrity. I wish we could have known this firm back in the day.
          </p>
          <p class="font-merriweather text-2xl text-gray-900 font-semibold mt-14">
            Cris Arens
          </p>
          <p class="text-gray-500 mt-1">
            Managing Partners at Logisyn Advisors
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p class="text-gray-800 leading-8">
            I was really impressed with my Switch team. I did not imagine I would be getting such good, smart ideas along with excellent design work. I want to thank Switch for making it happen for us.
          </p>
          <p class="font-merriweather text-2xl text-gray-900 font-semibold mt-14">
            Michael Pallotto
          </p>
          <p class="text-gray-500 mt-1">
            Co-founder of Skriply
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p class="text-gray-800 leading-8">
            Switch took care of the Project Design and Management of a mobile App for our staff and members. I have a Master of Science Degree in Software Engineering, and it was refreshing and exciting to observe modern Software Development in action on this diverse team. The project was a success, on time and on budget. I look forward to expanding our portfolio of smartphone Apps for our businesses with them.
          </p>
          <p class="font-merriweather text-2xl text-gray-900 font-semibold mt-14">
            Arnie Johnson
          </p>
          <p class="text-gray-500 mt-1">
            President & Chair Board of Directors Thrive Workplace
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
