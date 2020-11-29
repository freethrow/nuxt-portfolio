<template>
  <div>
    <h3>Title: {{ project.fields.title }} </h3>

    <div class="description" v-html="$md.render(project.fields.description)">
    </div>
    <hr>
    <div v-for="(picture,index) in project.fields.images" :key="index">
        {{ picture.fields.title }}<br/>

        <img :src="`${picture.fields.file.url}?fm=jpg&fl=progressive`" alt="" class="w-full">
        
    </div>

<div class="bg-red-800 text-white">
{{ project.fields }}
</div>
    
  </div>
</template>



<script>
import client from '~/plugins/contentful';

export default {

    
  asyncData({params}) {
    
    return client.getEntries({
      
      content_type:'project',
      'fields.slug':params.slug
      })
      .then(entries => {
        // just one entry        
        return {project: entries.items[0]}
      })
      .catch(err=>console.log(err))
  },

  head(){
      return {
          title:this.project.fields.title
      }
  }
}

</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  
}

h2{
  color:blue;
}



</style>
