<template>
    <div class="flex justify-between items-center">
    <div class="p-5">
       <div><img 
       src="https://images.ctfassets.net/qjtsepnj8pkr/3ZEJxurPPi1DKu0sZS6RL0/6f0ba467479ee6dee238ecd95e5f273f/signature.png?h=250" 
       alt=""
       class="w-48"></div>
    </div>
    <div class="nav flex justify-end items-center">
        <ul class="flex justify-center items-center flex-row">
        <li class="inline-block p-2"><nuxt-link to="/" >Home</nuxt-link></li>
        <li class="inline-block p-2"><nuxt-link to="/painting" >Izložbe</nuxt-link></li>
        <li class="inline-block p-2"><nuxt-link to="/architecture">Arhitektura</nuxt-link></li>
        <li class="inline-block p-2"><nuxt-link to="/">Projekti</nuxt-link></li>
        <li class="inline-block p-2"><nuxt-link to="/">Biografija</nuxt-link></li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>

</style>
