<template>
  <div>
    <nav class="bg-white sm:px-10 px-2 sm:flex justify-between items-center border-b-1 border-gray-600">
      <div class="flex px-4 justify-between sm:py-0 pb-1">
        <div>
          <a href="">
            <img src="https://images.ctfassets.net/qjtsepnj8pkr/3ZEJxurPPi1DKu0sZS6RL0/6f0ba467479ee6dee238ecd95e5f273f/signature.png?h=250" alt="Logo" class="w-48 opacity-40 mt-2" />
          </a>
          <h1 class="text-primary font-thin text-xl">Dragana Jokić d.i.a. | Portfolio</h1>
        </div>
        <button class="text-gray-400 text-3xl sm:hidden block focus:outline-none" id="navIcon">&#9776;</button>
      </div>

      <ul class="hidden sm:flex cursor-pointer font-light" id="navContent">
        <li class="py-2 px-1 sm:border-b-2 border-primary hover:text-primary transition duration-200 text-primary hover:bg-gray-200 sm:hover:bg-transparent text-white"><nuxt-link to="/" class="block">Home</nuxt-link></li>
        <li class="text-gray-600 py-2 sm:border-b-2 border-transparent hover:border-primary sm:hover:text-primary transition hover:bg-gray-200 duration-200 sm:hover:bg-transparent"><nuxt-link to="/painting/" class="block">Slikarstvo</nuxt-link></li>
        <li class="text-gray-600 py-2 sm:border-b-2 border-transparent hover:border-primary sm:hover:text-primary transition hover:bg-gray-200 duration-200 sm:hover:bg-transparent"><nuxt-link to="/projects/" class="block">Arhitektura</nuxt-link></li>
        <li class="text-gray-600 py-2 sm:border-b-2 border-transparent hover:border-primary sm:hover:text-primary transition hover:bg-gray-200 duration-200 sm:hover:bg-transparent"><nuxt-link to="/activities/" class="block">Aktivnosti</nuxt-link></li>
        <li class="text-gray-600 py-2 sm:border-b-2 border-transparent hover:border-primary sm:hover:text-primary transition hover:bg-gray-200 duration-200 sm:hover:bg-transparent"><nuxt-link to="/about/" class="block">Biografija</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
