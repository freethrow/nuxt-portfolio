<template>
  <div class="p-2 mx-auto">
    <div class="name my-10 flex flex-col justify-center items-center">
      <img class="opacity-30 hover:opacity-100 transition-opacity rounded-full w-48" :src="bio.fields.portrait.fields.file.url" alt="Dragana Jokic Image" />
      <h1 class="text-primary text-2xl font-bold">Dragana Jokić</h1>
      <h2 class="text-sun text-xl font-light">slikar i arhitekta</h2>

      <p class="font-extralight mt-10">{{ bio.fields.intro }}</p>
    </div>

    <div class="lg:grid lg:grid-cols-3 lg:gap-4">
      <div id="painting" class="m-3 p-3 shadow-lg">
        <div class="">
          <img class="p-2 h-48 w-full object-center object-cover" :src="`${bio.fields.landingPainting.fields.file.url}?fm=jpg&fl=progressive`" :alt="bio.fields.landingPainting.fields.title" />
        </div>
        <div>
          <h2 class="font-bold text-primary my-3">Slikarstvo</h2>

          <p class="font-extralight">{{ bio.fields.introPainting }}</p>
        </div>
      </div>

      <div id="projects" class="mx-3 my-5 p-3 shadow-lg">
        <div class="">
          <img class="p-2 h-48 w-full object-center object-cover" :src="`${bio.fields.landingArchitecture.fields.file.url}?fm=jpg&fl=progressive`" :alt="bio.fields.landingArchitecture.fields.title" />
        </div>
        <div>
          <h2 class="font-bold text-primary my-3">Arhitektura</h2>
          <p class="font-extralight">{{ bio.fields.introArchitecture }}</p>
        </div>
      </div>

      <div id="activities" class="mx-3 my-5 p-3 shadow-lg">
        <div class="">
          <img class="p-2 h-48 w-full object-center object-cover" :src="`${bio.fields.landingActivities.fields.file.url}?fm=jpg&fl=progressive`" :alt="bio.fields.landingActivities.fields.title" />
        </div>
        <div>
          <h2 class="font-bold text-primary my-3">Ostale aktivnosti</h2>
          <p class="font-extralight">{{ bio.fields.introActivities }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  asyncData() {
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen bg-green-500;
}
*/
</style>
