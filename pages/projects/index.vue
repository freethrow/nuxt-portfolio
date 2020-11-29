<template>
  <div class="container">
    <div>
      <Navigation /> 
    </div>
    <div class="projects">

    <div v-for="(project,index) in exhibitions" :key= "index"
    class="">
    
   
    <img :src="project.fields.cover.fields.file.url"
    class="rounded-2xl" />

    <hr>
    {{ project.fields.description }}

    <nuxt-link :to="`projects/${project.fields.slug}`">link</nuxt-link>
   
    

    </div>
  
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  asyncData() {
    return client.getEntries({
      content_type:'project',
      'fields.category':'commercial'
      })
      .then(entries => {

        for (const element of entries.items) {
          console.log(element.fields.category);
        }   
              
        return {exhibitions: entries.items}
      })
      .catch(err=>console.log(err))
  },
  
}
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
