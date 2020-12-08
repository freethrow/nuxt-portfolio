<template>
  <div>
    <div class="mt-8 mx-2 wrapper">
      <h2 class="text-primary px-5 font-bold text-xl">Biografija</h2>
      <hr class="mx-5" />

      <div id="bio" class="mx-auto p-8 container font-light lg:grid lg:gap-2 lg:grid-cols-3 lg:grid-flow-row-dense">
        <BioComponent title="Obrazovanje" :content="bio.fields.education" />
        <BioComponent title="Radno iskustvo" :content="bio.fields.expirience" class="col-span-2" />
        <BioComponent title="Slikarstvo" :content="bio.fields.painting" class="col-span-2" />
        <BioComponent title="Arhitektura" :content="bio.fields.arhitektura" />
        <BioComponent title="Aktivnosti" :content="bio.fields.activities" class="col-span-2" />
        <BioComponent title="Nagrade" :content="bio.fields.awards" />
      </div>
    </div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "bio",
      })
      .then((entries) => {
        return { bio: entries.items[0] };
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.wrapper {
}
</style>
