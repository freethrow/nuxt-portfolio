<template>
  <div>
    <h3 class="font-bold text-xl px-5 text-primary">{{ project.fields.title }}</h3>

    <div class="mx-auto p-5 container font-light" v-html="$md.render(project.fields.description)"></div>

    <div class="md:grid lg:grid-cols-3 md:grid-cols-2 gap-3">
      <div v-for="(picture, index) in project.fields.images" :key="index" class="">
        <ImageCard :url="picture.fields.file.url" />
      </div>
    </div>

    <div v-if="project.fields.additional">
      <div class="mx-auto py-3 container font-light" v-html="$md.render(project.fields.additional)"></div>
    </div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "project",
        "fields.slug": params.slug,
      })
      .then((entries) => {
        // just one entry
        console.log(entries.items[0]);
        return { project: entries.items[0] };
      })
      .catch((err) => console.log(err));
  },

  head() {
    return {
      title: this.project.fields.title,
      script: [{ src: "https://code.jquery.com/jquery-1.12.4.min.js" }, { src: "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js" }, { src: "images.js" }],
      link: [{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" }],
    };
  },
};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}

*/
</style>
