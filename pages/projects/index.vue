<template>
  <div>
    <div class="projects">
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
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
