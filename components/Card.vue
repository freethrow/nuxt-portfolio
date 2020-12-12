<template>
  <div class="mx-auto bg-white p-6 my-5 rounded-lg shadow-lg w-full relative">
    <nuxt-link class="focus:outline-none" :to="slug">
      <div class="flex flex-col justify-items-stretch">
        <h3 class="font-bold text-lg focus:outline-none text-primary">{{ title }}</h3>
        <div
          class="focus:outline-none font-thin my-3 text-gray-600 flex-1"
          v-html="$md.render(description)"
        ></div>
        <img
          class="w-full object-cover my-3 object-center max-h-80 lg:h-48 lg:max-w-full focus:outline-none opacity-80 hover:opacity-100 transition-opacity"
          :src="`${cover}?fm=jpg&fl=progressive`"
          alt=""
        />
        <div class="">
          <span v-if="year" class="float-right font-thin px-2">{{ year }}.</span>
          <span v-if="location" class="float-right font-thin">{{ location }}</span>
        </div>
      </div>
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
