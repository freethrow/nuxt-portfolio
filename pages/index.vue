<template>
  <div class="p-2 mx-auto">
  <div class="name my-10">
    <h1 class="text-primary text-2xl font-bold">Dragana Jokić</h1>
    <h2 class="text-sun font-semibold">slikar i arhitekta</h2>
    <p class="font-extralight my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, natus. In, veritatis modi deserunt quae velit soluta necessitatibus obcaecati eum rerum commodi libero suscipit eius sint. Cupiditate explicabo saepe labore!</p>
  </div>

  <div id="painting" class="m-3 p-3 shadow-lg">
    <div class="">
      <img class="p-2 h-48 w-full object-center object-cover"
      src="http://images.ctfassets.net/qjtsepnj8pkr/6mD0tI687sdlrEaZis9bBJ/3b5261cc609634d33ba2cf389f29254b/gozba-2003.jpg?fm=jpg&fl=progressive" alt="" />
    </div>
    <div>
      <h2 class="font-bold text-steel my-3">Slikarstvo</h2>
      <p class="font-extralight">Autor više od Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem maiores ad optio quia deserunt tenetur ipsam harum ut quas, fugit non doloremque perspiciatis! Aliquid, unde voluptatem placeat cumque voluptatum aspernatur?</p>
    </div>  
  </div>
 

  
  <div id="projects" class="mx-3 my-5 p-3 shadow-lg">
    <div class="">
      <img class="p-2 h-48 w-full object-center object-cover"
      src="http://images.ctfassets.net/qjtsepnj8pkr/5hM9r5gscbqOBFlO7mCW4j/3207c0d4c0712b9190bdd70247c5c800/basta-1o-_medium_.jpg?fm=jpg&fl=progressive" alt="" />
    </div>
    <div>
      <h2 class="font-bold text-steel my-3">Arhitektura</h2>
      <p class="font-extralight">Autor više od Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem maiores ad optio quia deserunt tenetur ipsam harum ut quas, fugit non doloremque perspiciatis! Aliquid, unde voluptatem placeat cumque voluptatum aspernatur?</p>
      <a class="inline-block px-3 py-1 bg-aqua text-gray-200 rounded" href="/projects/">portfolio</a>
    </div>  
  </div>

    <div id="activities" class="m-3 p-3">
    <div class="flex flex-row justify-center items-center">
      <img class=" opacity-30 hover:opacity-100 transition-opacity"
      src="http://draganajokic.rs/uploads/cv.jpg" alt="" />
    </div>
    <div>
      <h2 class="font-bold text-steel my-3">Projekti, knjige - treba veca</h2>
      <p class="font-extralight">Autor više od Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem maiores ad optio quia deserunt tenetur ipsam harum ut quas, fugit non doloremque perspiciatis! Aliquid, unde voluptatem placeat cumque voluptatum aspernatur?</p>
    </div>  
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
      })
      .then((entries) => {
        for (const element of entries.items) {
          console.log(element.fields.category);
        }

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

</style>
