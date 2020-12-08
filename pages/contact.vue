<template>
  <div>
    <div class="mt-8 mx-2 wrapper">
      <h2 class="text-primary px-5 font-bold text-xl">Biografija <span> &amp;</span> kontakt</h2>
      <hr class="mx-5" />

      <hr class="mx-5" />
      <h2 class="mx-5">Kontakt</h2>
      <div class="px-12 py-6 h-1/2">
        <div class="bg-white p-10 md:w-1/2 lg:w-3/4 mx-auto rounded-lg shadow-xl">
          <form name="contactus" action="/" method="post" netlify netlify-honeypot="bot-field">
            <div class="text-sm">
              <div class="flex items-center mb-5">
                <label for="name" class="inline-block w-40 text-right mr-6">Ime:</label>
                <input type="text" name="name" id="name" placeholder="Ime Prezime" class="border-b-2 flex-1 placeholder-gray-400 focus:border-ternary outline-none" required />
              </div>

              <div class="flex items-center mb-5">
                <label for="email" class="inline-block w-40 text-right mr-6">Email:</label>
                <input type="email" name="email" id="email" placeholder="ime@email.com" class="border-b-2 flex-1 placeholder-gray-400 focus:border-ternary outline-none" required />
              </div>

              <div class="flex items-center mb-10">
                <label for="message" class="inline-block w-40 text-right mr-6">Poruka:</label>
                <textarea name="message" id="message" required class="border-b-2 flex-1 focus:border-ternary outline-none"></textarea>
              </div>

              <div class="text-right">
                <button type="submit" value="submit" class="rounded py-3 px-8 text-white bg-primary">Poslati poruku</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.wrapper {
}
</style>
