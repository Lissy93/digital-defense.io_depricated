<template>
  <div class="have-i-been-hacked">
      <h2>Check if your account has been compromised in a data breach</h2>
      <form @submit.prevent="handleSubmit">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email address" 
          class="big-text-field"
          required
        >
        <button class="big-button">Check</button>
      </form>

      <section>
        <loader v-if="loading" loaderText="Checking..." />
      </section>

      <section v-if="results" class="results">
        <span>Results will show here</span>
      </section>

      <section class="error" v-if="error">
        <span class="line-1">There was an error checking database</span><br>
        <span class="line-2">This has been logged, and will be looked into</span>
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
import axios from 'axios';


@Component({
  components: {
    Loader,
  },
  data: () => {
    return {
      email: '',
      error: false,
      results: null,
      loading: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

    
      this.$data.loading = true;
      const email = this.$data.email;
      const url = `https://haveibeenpwned.com/api/v2/breachedaccount/${email}`;

      const requestConfig = {
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Origin': 'https://localhost',
          // 'Access-Control-Allow-Credentials': 'true',
          // 'User-Agent': 'Alicia-Sykes-App',
          // 'cache-control': 'no-cache',
          // 'api-version': 2,
        },
      };

      axios
        .get(url, requestConfig)
        .then((response) => {
          console.log(response);
          this.$data.results = response;
          this.$data.loading = false;
          console.log(response);
        }, (error) => {
          console.log('big error happened');
          this.$data.loading = false;
          this.$data.error = true;
        });

    },
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
      color: #2c3e50;
      margin: 1em 0;
      border: 2px solid #2c3e50;
      width: fit-content;
      margin: 1em auto;
      padding: 1em;
      border-radius: 10px;
      background: rgba(255,255,255,0.2);
      text-align: center;
      .line-1 {
        font-size: 2em;
      }
      .line-2 {
        font-size: 1.5em;
      }
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


