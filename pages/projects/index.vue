<template>
  <div>
    <div class="projects mt-8">
       <h2 class="text-primary px-5 font-bold text-xl">Arhitektura</h2>
       <hr class="mx-5">
    <p class="text-primary mx-5">Rezidencijalni objekti</p>
      <Card v-for="(project, index) in projects" :key="index" :title="project.fields.title" :cover="project.fields.cover.fields.file.url" :description="project.fields.description" :location="project.fields.location" :year="project.fields.year" :slug="`${project.fields.slug}`" />
    </div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  asyncData() {
    return client
      .getEntries({
        content_type: "project",
        "fields.category": "residential",
      })
      .then((entries) => {
        return { projects: entries.items };
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
