<template>
  <div class="projects mt-8">
    <h2 class="text-primary px-5 font-bold text-xl">Slikarstvo</h2>
    <hr class="mx-5" />
    <p class="text-primary mx-5">Samostalne i ostale izložbe</p>
    <div class="lg:grid lg:grid-cols-2 gap-4">
      <Card v-for="(expo, index) in exhibitions" :key="index" :title="expo.fields.title" :cover="expo.fields.cover.fields.file.url" :description="expo.fields.description" :year="expo.fields.year" :slug="`/painting/${expo.fields.slug}`" />
    </div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  asyncData() {
    return client
      .getEntries({
        // project is really exhibition!!!!!!!!
        // I would have to recreate everything in order to get it to work

        content_type: "exhibition",
      })
      .then((entries) => {
        for (const element of entries.items) {
          console.log(element.fields.category);
        }

        return { exhibitions: entries.items };
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen bg-green-500;
}
*/
</style>
