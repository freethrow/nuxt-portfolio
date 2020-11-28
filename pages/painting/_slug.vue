<template>
  <div class="container">
    <div>
    <Navigation /> 
 
    </div>
    <h3>Title: {{ expo.fields.title }} </h3>

    <div class="description" v-html="$md.render(expo.fields.description)">
    </div>

       <div class="additional" v-html="$md.render(expo.fields.additional)">
    </div>
   
    Params slug: {{ $route.params.slug }}

    <hr>
    <div v-for="(picture,index) in expo.fields.picture" :key="index">
        {{ picture.fields.title }}<br/>
        ASETTT: {{ picture.fields.image.fields.file.url }} <br/>
        <img :src="picture.fields.image.fields.file.url" alt="" class="w-full">
        
    </div>
<hr>
<div class="bg-red-800 text-white">
{{ expo.fields }}
</div>
    
  </div>
</template>



<script>
import client from '~/plugins/contentful';

export default {

    
  asyncData({params}) {
    return client.getEntries({
      content_type:'exhibition',
      'fields.slug':params.slug
      })
      .then(entries => {
        // just one entry        
        return {expo: entries.items[0]}
      })
      .catch(err=>console.log(err))
  },

  head(){
      return {
          title:this.expo.fields.title
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
