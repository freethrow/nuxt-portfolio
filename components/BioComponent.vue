<template>
  <div class="flex flex-col justify-start shadow-lg p-3 my-5 lg:my-0">
    <h2>{{ title }}</h2>
    <div v-html="$md.render(content)"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>

<style lang="scss" scoped></style>
