<template> 
    <div class="p-3">
    <h3 class="font-bold text-xl">{{ expo.fields.title }} </h3>

    <img :src=expo.fields.cover.fields.file.url alt=""
    class="w-full h-48 object-center object-cover my-2">

    <div class="mx-auto py-3 container font-light" v-html="$md.render(expo.fields.description)">
    </div>
       <div class="mx-auto py-3 container font-light" v-if="expo.fields.additional" v-html="$md.render(expo.fields.additional)">
    </div>
   
 

    <hr>
    <h3>All images</h3>
    <div class="lg:grid lg:grid-cols-2 gap-2">
    <div v-for="(picture,index) in expo.fields.picture" :key="index" 
    class="">

    <ImageCard 
      :title = picture.fields.title
      :url = picture.fields.image.fields.file.url
      :dimensions = picture.fields.dimensions
    />
    </div>
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



</style>
