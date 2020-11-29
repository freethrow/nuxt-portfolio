<template>
  <div class="container">
    <div>
    <Navigation /> 
    
    </div>

    <h1>{{ bio.fields.title}}</h1>

    <div v-html=renderedBio></div>

    {{ bio.fields.content }}


<hr>

    
  </div>
</template>



<script>

import client from '~/plugins/contentful';
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {

    
  asyncData({params}) {
    return client.getEntries({
      content_type:'bio'
      })
      .then(entries => {
        // just one entry  
        console.log(entries.items[0])      
        return {bio: entries.items[0]}
      })
      .catch(err=>console.log(err))
  },

  computed:{
      renderedBio(){
          return documentToHtmlString(this.bio.fields.content)
      },
  }
}

</script>

</style>
