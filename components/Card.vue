<template>
  <div class="mx-auto bg-white p-6 my-5 rounded-lg shadow-lg relative">
    <nuxt-link class="focus:outline-none" :to="slug">
      <h3 class="font-bold text-lg focus:outline-none text-gray-600">{{ title }}</h3>
      <p class="focus:outline-none">{{ description }}</p>
      <img class="w-full object-cover object-center max-h-80 lg:h-48 lg:max-w-full focus:outline-none opacity-80 hover:opacity-100 transition-opacity" :src="`${cover}?fm=jpg&fl=progressive`" alt="" />
      <div v-if="location" class="float-right font-thin">{{ location }}</div>
      <div v-if="year" class="absolute bg-red-700 text-white bottom-10 right-10 opacity-70 px-4 py-1 rounded-full">{{ year }}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    cover: String,
    slug: String,
    year: Number,
    location: String,
  },
};
</script>

<style lang="scss" scoped></style>
