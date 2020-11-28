<template>
  <div class="container">
    <div>
      <Navigation /> 
    </div>
    <div class="projects">

    <div v-for="(expo,index) in exhibitions" :key= "index"
    class="">
    
   
    <img :src="expo.fields.cover.fields.file.url"
    class="rounded-2xl" />

    <hr>
    {{ expo.fields.description }}

    <nuxt-link :to="`/painting/${expo.fields.slug}`">link</nuxt-link>
   
    

    </div>
  
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  asyncData() {
    return client.getEntries({
    // project is really exhibition!!!!!!!!
    // I would have to recreate everything in order to get it to work

      content_type:'exhibition'
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
