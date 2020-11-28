<template>
  <div class="container">
    <div>
      <Navigation /> 
    </div>
    <div class="projects">

    <div v-for="(category,index) in categories" :key= "index"
    class="">
    {{ category }}
   
    </div>
  </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  asyncData() {
    return client.getEntries({
      content_type:'category'
      })
      .then(entries => {

        for (const element of entries.items) {
          console.log(element);
        }   
              
        return {categories: entries.items}
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
