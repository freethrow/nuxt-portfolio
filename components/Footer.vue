<template>
  <div
    class="mx-3 mt-8 text-aqua flex flex-col md:flex-row font-thin justify-items-stretch items-center"
  >
    <div class="border-primary border-t-2 md:flex-1 h-full p-3 w-full">
      <nuxt-link to="/" class="hover:text-primary">Dragana Jokić, d.i.a.</nuxt-link> |
      <nuxt-link to="/painting" class="hover:text-primary">Slikarstvo</nuxt-link> |
      <nuxt-link to="/architecture" class="hover:text-primary">Arhitektura</nuxt-link> |
      <nuxt-link to="/activities" class="hover:text-primary">Aktivnosti</nuxt-link>
    </div>

    <div class="border-ternary border-t-2 md:flex-1 h-full p-3 w-full">
      ars@draganajokic.rs tel: +381 63 63636363
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
