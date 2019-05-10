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

      <div class="what-to-do-button" v-if="!showAdvise"  @click="showAdvise = true">
        <span>
          What to do if your account is breached?
        </span>
      </div>

      <section class="loader">
        <loader v-if="loading" loaderText="Checking..." />
      </section>

      <section v-if="results" class="results">
        <div v-if="results.length === 0" class="all-good">
          <h4>
            Great news, your email address hasn't shown up in any recently recorded hacks
          </h4>
          <img src="../../public/img/success.png" alt="Tick Image">
          <small>
            The breaches being searched isn't a difinitive list, and it is still important to take precautions.
          </small>
        </div>
        <div v-else>
          
          <div class="youve-been-hacked">
            <h4>Warning: Accounts associated with your email have been leaked in {{results.length}} hacks</h4>
            <img src="../../public/img/error.png" alt="Cross Image">
          </div>

          <div class="hack-list">
            <div
              v-for="hack in results"
              v-bind:key="hack.title"
              class="tile">
                <div class="tile-header">
                  <h3 class="tile-title">{{hack.title}}</h3>
                  <span><b>Leak Date:</b> {{hack.breachDate}}</span>
                  <span><b>Number Leacked Records:</b> {{hack.count}}</span>
                </div>
                <div class="tile-content">
                  <img :src="hack.logo" :alt="`${hack.title} Logo`" class="tile-icon">
                  <span class="tile-description" v-html="hack.description"></span>
                </div>
                <div class="tile-footer">
                  <b>Leaked Data</b>
                  <ul>
                    <li v-for="dataLoss in hack.leakedData" v-bind:key="dataLoss">{{dataLoss}}, </li>
                  </ul>
                </div>
              </div>
          </div>

          <div class="more-info">
              <h5>What does this mean?</h5>
              <span>
                Certain account information has been leaked. This happens when companies fail to securly 
                store user information, and then suffer a data breach. Often, no harm comes to the affected users.
                But ocassionaly sensetive information gets published or sold, so it is important to take necissary precautions.
              </span>
            </div>
        </div>
      </section>

      <section class="what-to-do-container" v-if="showAdvise">
        <Checklist class="checklist" :theList="whatToDoIfYourHacked" title="What to do, if your email has been leaked"/>
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
import { Checklist } from 'vue-checklist';
import Loader from '../components/Loader.vue';
import axios from 'axios';
import * as whatToDoIfYourHacked from './../data/what-to-do-if-your-hacked.json';


@Component({
  components: {
    Loader,
    Checklist,
  },
  data: () => {
    return {
      email: '',
      error: false,
      results: null,
      loading: false,
      showAdvise: false,
      whatToDoIfYourHacked: whatToDoIfYourHacked.default,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$data.loading = true;
      const email = this.$data.email;
      const url = `/api/have-i-been-hacked/${email}`;

      axios
        .get(url)
        .then((response) => {
          this.$data.results = response.data;
          this.$data.loading = false;
          this.$data.showAdvise = response.data.length > 0;
        }, (error) => {
          this.$data.loading = false;
          this.$data.error = true;
        });

    },
  },
})
export default class HaveIBeenHacked extends Vue {}
</script>

<style lang="scss" scoped>
  @import './../styles/hacked-styles.scss'
</style>


