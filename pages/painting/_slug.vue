<template>
  <div>
    <h3 class="font-bold text-xl p-5 text-primary">{{ expo.fields.title }}, {{ expo.fields.year}}</h3>
   
    <div class="mx-auto p-5 container font-light" v-html="$md.render(expo.fields.description)"></div>

   
    <div class="lg:grid lg:grid-cols-2 lg:gap-3">
      <div v-for="(picture, index) in expo.fields.picture" :key="index" class="">
        <ImageCard :title="picture.fields.title" :url="picture.fields.image.fields.file.url" :dimensions="picture.fields.dimensions" />
      </div>
    </div>

    <div v-if="expo.fields.additional">
      <div class="mx-auto p-3 mt-2  container font-light" v-html="$md.render(expo.fields.additional)"></div>
    </div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";
export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "exhibition",
        "fields.slug": params.slug,
      })
      .then((entries) => {
        // just one entry
        return { expo: entries.items[0], visible: false };
      })
      .catch((err) => console.log(err));
  },

  head() {
    return {
      title: this.expo.fields.title,
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
