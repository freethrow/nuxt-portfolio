<template>
  <div class="p-2 mx-auto">
    <div class="name my-10 flex flex-col justify-center items-center">
      <nuxt-link class="outline-none" to="/about">
        <img
          class="opacity-30 animate-pulse transition-transform rounded-full w-48"
          :src="bio.fields.portrait.fields.file.url"
          alt="Dragana Jokic Image"
        />
      </nuxt-link>
      <h1 class="text-primary text-2xl font-bold">Dragana Jokić</h1>
      <h2 class="text-teriary text-xl font-normal">slikarka arhitekta umetnica</h2>

      <p class="font-extralight mt-10">{{ bio.fields.intro }}</p>
    </div>

    <div class="lg:grid lg:grid-cols-3 lg:gap-4">
      <div
        id="painting"
        class="m-3 p-3 shadow-lg transform hover:scale-105 hover:rotate-1 transition duration-300"
      >
        <nuxt-link to="/painting">
          <div class="outline-none">
            <img
              class="h-48 w-full object-center object-cover"
              :src="`${bio.fields.landingPainting.fields.file.url}?fm=jpg&fl=progressive`"
              :alt="bio.fields.landingPainting.fields.title"
            />
          </div>
          <div>
            <h2 class="font-bold text-primary my-3 text-base">Slikarstvo</h2>
            <p class="font-extralight">{{ bio.fields.introPainting }}</p>
          </div>
        </nuxt-link>
      </div>

      <div
        id="projects"
        class="mx-3 my-5 p-3 shadow-lg transform hover:scale-105 hover:rotate-1 transition duration-300"
      >
        <nuxt-link to="projects">
          <div class="outline-none">
            <img
              class="h-48 w-full object-center object-cover"
              :src="`${bio.fields.landingArchitecture.fields.file.url}?fm=jpg&fl=progressive`"
              :alt="bio.fields.landingArchitecture.fields.title"
            />
          </div>
          <div>
            <h2 class="font-bold text-primary my-3 text-base">Arhitektura</h2>
            <p class="font-extralight">{{ bio.fields.introArchitecture }}</p>
          </div>
        </nuxt-link>
      </div>

      <div
        id="activities"
        class="mx-3 my-5 p-3 shadow-lg transform hover:scale-105 hover:rotate-1 transition duration-500"
      >
        <nuxt-link to="activities">
          <div class="outline-none">
            <img
              class="h-48 w-full object-center object-cover"
              :src="`${bio.fields.landingActivities.fields.file.url}?fm=jpg&fl=progressive`"
              :alt="bio.fields.landingActivities.fields.title"
            />
          </div>
          <div>
            <h2 class="font-bold text-primary my-3 text-base">Ostale aktivnosti</h2>
            <p class="font-extralight">{{ bio.fields.introActivities }}</p>
          </div>
        </nuxt-link>
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
