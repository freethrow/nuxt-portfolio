<template>
  <div>
    <div class="mt-8 mx-2 wrapper">
      <h2 class="text-primary px-5 font-bold text-xl">Biografija <span> &amp;</span> kontakt</h2>
      <hr class="mx-5" />

      <div id="bio" class="mx-auto p-8 container font-light lg:grid lg:gap-2 lg:grid-cols-3 lg:grid-flow-row-dense">
        <div id="education" v-if="bio.fields.education" class="shadow p-1 m-2">
          <h2>Obrazovanje</h2>
          <div v-html="$md.render(bio.fields.education)"></div>
        </div>

        <div id="expirience" v-if="bio.fields.expirience" class="shadow p-1 m-2 col-span-2">
          <h2>Radno iskustvo</h2>
          <div v-html="$md.render(bio.fields.expirience)"></div>
        </div>

        <div id="painting" v-if="bio.fields.painting" class="shadow p-1 m-2 col-span-2">
          <h2>Slikarstvo</h2>
          <div v-html="$md.render(bio.fields.painting)"></div>
        </div>

        <div id="architecture" v-if="bio.fields.arhitektura" class="shadow p-3 m-2">
          <h2>Arhitektura - projekti i enterijeri</h2>
          <div v-html="$md.render(bio.fields.arhitektura)"></div>
        </div>

        <div id="activities" v-if="bio.fields.activities" class="shadow p-1 m-2 col-span-2">
          <h2>Aktivnosti</h2>
          <div v-html="$md.render(bio.fields.activities)"></div>
        </div>

        <div id="awards" v-if="bio.fields.awards" class="shadow p-1 m-2">
          <h2>Nagrade</h2>
          <div v-html="$md.render(bio.fields.awards)"></div>
        </div>
      </div>

      <hr class="mx-5" />
      <h2 class="mx-5">Kontakt</h2>
      <div class="px-12 py-6 h-1/2">
        <div class="bg-white p-10 md:w-1/2 lg:w-3/4 mx-auto rounded-lg shadow-xl">
          <form name="contactus" action="/" method="post" netlify netlify-honeypot="bot-field">
            <div class="text-sm">
              <div class="flex items-center mb-5">
                <label for="name" class="inline-block w-40 text-right mr-6">Ime:</label>
                <input type="text" name="name" id="name" placeholder="Ime Prezime" class="border-b-2 flex-1 placeholder-gray-400 focus:border-green-300 outline-none" required />
              </div>

              <div class="flex items-center mb-5">
                <label for="email" class="inline-block w-40 text-right mr-6">Email:</label>
                <input type="email" name="email" id="email" placeholder="ime@email.com" class="border-b-2 flex-1 placeholder-gray-400 focus:border-green-300 outline-none" required />
              </div>

              <div class="flex items-center mb-10">
                <label for="message" class="inline-block w-40 text-right mr-6">Poruka:</label>
                <textarea name="message" id="message" required class="border-b-2 flex-1 focus:border-green-300 outline-none"></textarea>
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

<script>
import client from "~/plugins/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "bio",
      })
      .then((entries) => {
        return { bio: entries.items[0] };
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.wrapper {
}
</style>
