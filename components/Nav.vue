<template>
  <div>
    <nav
      class="bg-white sm:px-10 px-2 sm:flex justify-between items-center border-b-1 border-gray-600"
    >
      <div class="flex px-4 justify-between sm:py-0 pb-1">
        <div>
          <a href="/" class="outline-none">
            <img
              src="https://images.ctfassets.net/qjtsepnj8pkr/3ZEJxurPPi1DKu0sZS6RL0/6f0ba467479ee6dee238ecd95e5f273f/signature.png?h=250"
              alt="Logo"
              class="w-48 opacity-40 mt-2 transform hover:scale-105 hover:rotate-1 transition duration-500"
            />
          </a>
          <h1 class="text-primary font-thin text-xl">Dragana Jokić d.i.a. | Portfolio</h1>
        </div>
        <button
          class="text-gray-400 text-3xl sm:hidden block focus:outline-none"
          id="navIcon"
        >
          &#9776;
        </button>
      </div>

      <ul class="hidden sm:flex cursor-pointer font-light" id="navContent">
        <li
          class="text-gray-600 mx-3 py-2 sm:border-b-2 border-transparent hover:border-primary sm:hover:text-primary transition hover:bg-gray-200 duration-200 sm:hover:bg-transparent"
        >
          <nuxt-link to="/" class="block outline-none">Naslovna</nuxt-link>
        </li>
        <li
          class="text-gray-600 mx-3 py-2 sm:border-b-2 border-transparent hover:border-primary sm:hover:text-primary transition hover:bg-gray-200 duration-200 sm:hover:bg-transparent"
        >
          <nuxt-link to="/painting/" class="block outline-none">Slikarstvo</nuxt-link>
        </li>
        <li
          class="text-gray-600 mx-3 py-2 sm:border-b-2 border-transparent hover:border-primary sm:hover:text-primary transition hover:bg-gray-200 duration-200 sm:hover:bg-transparent"
        >
          <nuxt-link to="/projects/" class="block outline-none">Arhitektura</nuxt-link>
        </li>
        <li
          class="text-gray-600 mx-3 py-2 sm:border-b-2 border-transparent hover:border-primary sm:hover:text-primary transition hover:bg-gray-200 duration-200 sm:hover:bg-transparent"
        >
          <nuxt-link to="/activities/" class="block outline-none">Aktivnosti</nuxt-link>
        </li>
        <li
          class="text-gray-600 mx-3 py-2 sm:border-b-2 border-transparent hover:border-primary sm:hover:text-primary transition hover:bg-gray-200 duration-200 sm:hover:bg-transparent"
        >
          <nuxt-link to="/about/" class="block outline-none">Biografija</nuxt-link>
        </li>
        <li
          class="text-gray-600 mx-3 py-2 sm:border-b-2 border-transparent hover:border-primary sm:hover:text-primary transition hover:bg-gray-200 duration-200 sm:hover:bg-transparent"
        >
          <nuxt-link to="/contact/" class="block outline-none">Kontakt</nuxt-link>
        </li>
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

<style lang="css" scoped>
.nuxt-link-exact-active {
  color: #cca085;
}
</style>
