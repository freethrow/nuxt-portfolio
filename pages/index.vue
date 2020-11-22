<template>
  <div class="container bg-yellow-200">
    <div>
    <Navigation /> 
      <h1 class="title text-red-800">
        nuxtfolio 
      </h1>     
    </div>
    <div class="projects">
    <h2 v-for="(project,index) in projects" :key= "index">
    <nuxt-link :to="project.fields.slug" >
    {{ project.fields.title }}
   
      </nuxt-link>
    </h2>

    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  asyncData() {
    return client.getEntries({
      content_type:'project'
      })
      .then(entries => {
         console.log(entries.items);
        
        return {projects: entries.items}
      })
      .catch(err=>console.log(err))
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  
}



</style>
