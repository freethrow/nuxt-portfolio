<template>
  <div class="bg-white m-3 p-2 shadow-md">
    <a :href="url" data-lightbox="gallery" :data-title="title" class="focus:outline-none">
      <img class="w-full object-cover object-center max-h-80 lg:h-48 lg:max-w-full focus:outline-none opacity-80 hover:opacity-100 transition-opacity" :src="`${url}?fm=jpg&fl=progressive`" alt="" />
      <h4 class="my-2 text-center">{{ title }}</h4>
      <p class="font-thin text-center">{{ dimensions }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    dimensions: String,
    url: String,
  },
};
</script>

<style lang="css" scoped>
ul li {
  color: red;
}
</style>
