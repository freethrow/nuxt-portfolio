<template>
<div class="flex flex-col h-screen justify-between container">
  <div class="bg-white lg:grid gap-4 grid-cols-4">  
    <!--navbar -->
    <div id="navigation" 
    class="lg:col-span-1 flex flex-row justify-between items-center 
    bg-white lg:flex-col lg:items-end lg:justify-start">
      <!-- brand and logo -->
      <div class="p-3 flex flex-col justify-stretch">
        <img 
        src="https://images.ctfassets.net/qjtsepnj8pkr/3ZEJxurPPi1DKu0sZS6RL0/6f0ba467479ee6dee238ecd95e5f273f/signature.png?h=250" 
        alt=""
        class="w-64">        
        <h1 class="font-bold ml-2 lg:text-xl">Dragana Jokić | Portfolio</h1>       
        <div class="hidden ml-2 lg:block">Slikar Arhitekta</div>
      </div>
      <!-- navigation -->
      <div class="text-xl flex flex-col justify-end md:flex-row 
      lg:flex-col lg:items-end lg:mt-8 menu">
        <nuxt-link class="mr-3 p-1" to="/">Home</nuxt-link>
        <nuxt-link class="mr-3 p-1" to="/painting">Slikarstvo</nuxt-link>
        <nuxt-link class="mr-3 p-1" to="/projects">Projekti</nuxt-link>
        <nuxt-link class="mr-3 p-1" to="/activities">Aktivnosti</nuxt-link>
        <nuxt-link class="mr-3 p-1" to="/bio">Biografija</nuxt-link>      
      </div>

    </div>

    <div id="main" class="lg:col-span-3">
      
  <Nuxt/>
    </div>   
    </div>
    <footer class="flex-grow-0 mx-auto text-center font-thin">
   
      <p>dragana jokic email telefon linkedin viber wow</p>
 
   </footer>
  </div>


</template>

<style scoped>




.nuxt-link-exact-active {
    background-color:#333;
    display:inline-block;
    padding:0.4rem 1rem;
    color:white;
}

</style>
