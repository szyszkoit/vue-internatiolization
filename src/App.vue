<template>
  <div id="app">
    <div>
      <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language, entry.kendo_locale)">
        <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
      </button>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :locale="locale" :kendo_locale="kendo_locale"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import i18n from '@/plugins/i18n';

export default {
  name: 'App',
  data() {
    return {
      locale:'en',
      kendo_locale: 'en-EN',
      languages: [
        {
          flag: 'us',
          language: 'en',
          kendo_locale:'en-EN',
          title: 'English'
        },
        {
          flag: 'es',
          language: 'es',
          kendo_locale:'es-ES',
          title: 'Español'
        }
      ],
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    changeLocale(locale, kendo_locale) {
      i18n.locale = locale;
      const messages = `../node_modules/progress/kendo-ui/js/messages/kendo.messages.${kendo_locale}.js`
      import(messages);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
   padding: 15px;
   border: 1px solid green;
   font-size: 18px;
   margin: 15px;}
</style>
