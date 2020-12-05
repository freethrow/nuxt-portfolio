<template>
  <div>


    <h1 @click='alert("miks")'>{{ bio.fields.title}}</h1>

    <div v-html=renderedBio></div>

    {{ bio.fields.content }}



<hr>
<div class="bg-green-100 h-60">Moksi

<client-only placeholder="Loading...">

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Lipofsky_Pippen.jpg" alt="">
</client-only>

</div>
    
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

<style scoped>
.pswp__bg {
  background-color: #2f2f2f;
}

.my-gallery {
  display: flex;
  flex-flow: row wrap;
  figure {
    flex-grow: 1;
    min-width: 20%;
    margin-left: 5px;
    margin-right: 5px;
    a {
      img {
        border-radius: 10px;
        box-shadow: 5px 3px 5px #2f2f2f;
        &:hover {
          transform: scale(1.05);
          box-shadow: 5px 3px 5px #c9c3b2;
          transition: all 0.15s ease-in-out;
        }
      }
    }
  }
}

</style>
</style>
