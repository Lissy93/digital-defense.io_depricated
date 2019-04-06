<template>
  <div class="have-i-been-hacked">
      <h2>Check if your account has been compromised in a data breach</h2>
      <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Enter your email address" class="big-text-field" required>
        <button class="big-button">Check</button>
      </form>
      <section>
        <loader v-if="loading" loaderText="Checking..." />
      </section>
      <section class="results">

      </section>
      <section class="error" v-if="error">
        There was an error checking database.
      </section>
      <small class="credits">
        Data from <a href="https://feeds.feedburner.com/HaveIBeenPwnedLatestBreaches">';--have i been pwned?</a>
        with credits to <a href="https://www.troyhunt.com/">Troy Hunt</a>
      </small>
      
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loader from '../components/Loader.vue';
import axios from 'axios'


@Component({
  components: {
    Loader,
  },
  data: ()=>{ return {
    error: true,
    results: null,
    loading: false,
  }},
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$data.loading = true;
      console.log('starting....');
      axios
        .get('https://api.cdoindesk.com/v1/bpi/currentprice.json')
        .then((response) => {
          console.log(response)
          this.$data.loading = false;
        }, (error) => {
          console.log('big error happened')
          this.$data.loading = false;
          this.$data.error = true;
        })

    }
  },
})
export default class HaveIBeenHacked extends Vue {}
</script>

<style lang="scss" scoped>
    .have-i-been-hacked {
        background: #ee6e73;
        margin: 0;
        padding: 2em 1em;
        height: 500px;
    }
    h2 {
        margin: 0;
        color: #2c3e50;
    }
    .big-text-field {
      padding: 1em 2em;
      border: none;
      margin: 2em auto;
      font-size: 1.5em;
    }
    .big-button {
      padding: 1em 2em;
      background: #2c3e50;
      border: none;
      font-size: 1.5em;
      color: #ee6e73;
    } 
    .error {
      font-size: 2em;
      color: #2c3e50;
      margin: 1em 0;
      border: 2px solid #2c3e50;
      width: fit-content;
      margin: 1em auto;
      padding: 1em;
      border-radius: 10px;
      background: rgba(255,255,255,0.2);
    }

    @media (min-width: 769px) {
      .big-text-field {
        border-radius: 10px 0 0 10px;
      }
      .big-button {
        border-radius: 0 10px 10px 0;
      }

      small.credits, small.credits a {
          color: #2c3e50;
      }
      
    }
</style>


