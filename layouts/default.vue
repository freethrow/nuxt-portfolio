<template>
  <div>
    <div class="site">  
      <Nav />
      <div class="content mt-20 container mx-auto mx-2">
        <Nuxt />
      </div>  
      <div class="footer container mx-auto h-30 w-full">
        <Footer />
      </div>   
      
    </div>  
  </div>
</template>

<style>

.site{
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: stretch;

}

.content{
  flex:1 0 auto;
 
 
}

.footer{
  flex:0;
  }





.nuxt-link-exact-active {

}
</style>
