<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  charset: 'utf-8',
  title: 'Switch Software Solutions',
  titleTemplate: title => title !== 'Switch Software Solutions' ? `${title} · Switch Software Solutions` : title,
  meta: [
    { name: 'description', content: 'Custom Application Development Outsourcing - Nearshore - Agile Scrum - Austin, Texas - Montevideo, Uruguay' },
    { name: 'Keywords', content: 'software, development, software development, offshore software development, custom software development, application development, application development outsourcing, offshore application development, custom application development, IT outsourcing, software development outsourcing, nearshore, IT nearshoring, nearshore custom application development, agile, scrum, austin, texas, chicago, illinois, denver, colorado, montevideo, uruguay, full-service software development, full-service application development, IT Services, software development services, application development services, on-demand, on-demand software development, on-demand application development, staff-augmentation, dedicated team, dedicated team application development, software development partner, application development partner, switch, switch software, bbva, verifone, java, .net, javascript, angular, react, mobile development, android, ios, cobol, angular, javascript, ruby, docker, kubernetes AWS, Azure, sql, mysql, postgresql, mongodb, sql server, front-end development, back-end development, quality assurance, software testing, continuous integration, database development, microsoft certified, microsoft certified application development, web services, devops, developer skill gap, IT skill gap, access IT talent, talented, skilled, user experience, ui/ux, financial services custom application development, retail custom application development, banking custom application development, healthcare custom application development, financial services software development, banking software development, retail software development, healthcare software development' },
    { name: 'Robots', content: 'all' },
    { property: 'og:image', content: 'https://switchsoftware.vercel.app/social-card.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@switchsoftware' },
    { name: 'twitter:creator', content: '@switchsoftware' },
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
