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
        <div v-if="results.length === 0">
          Good News, no hacks found
        </div>
        <div v-else>
          
          <div class="youve-been-hacked">
            <h4>Warning: Accounts associated with your email have been leaked in {{results.length}} hacks</h4>
            <div class="more-info">
              <h5>What does this mean?</h5>
              <span>
                Certain account information has been leaked. This happens when companies fail to securly 
                store user information, and then suffer a data breach. Often, no harm comes to the affected users.
                But ocassionaly sensetive information gets published or sold, so it is important to take necissary precautions.
              </span>
            </div>
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
          <Checklist class="checklist" :theList="whatToDoIfYourHacked" title="What to do, if your email has been leaked"/>
        </div>
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
    .have-i-been-hacked {
        background: #ee6e73;
        margin: 0;
        padding: 2em 0;
        height: 100%;
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

    .results {
      background: #2c3e50;
      padding: 1em 2em 2em 2em;
      margin-bottom: 1em;
    }

    .youve-been-hacked {
      h4 {
        color: #ee6e73;
        text-align: center;
      }
      .more-info {
        text-align: left;
        max-width: 600px;
        margin: 0 auto;
        padding: 1em;
        color: #ee6e73; 
        h5 {
          margin: 0;
        }
      }
    }

    /deep/ .checkbox-container {
      max-height: 100px !important;
      min-width: 260px !important;
    }

    .hack-list {
      .tile {
        display: flex;
        flex-direction: column;
        max-width: 800px;
        background: rgba(225,225,225,0.6);
        color: #2c3e50;
        padding: 1em;
        border-radius: 10px;
        margin: 1em auto;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        .tile-content {
          display: flex;
        }
        .tile-header {
          display: flex;
          align-items: center;
          span {
            margin: 0 16px;
          }
        }
        .tile-footer {
          display: flex;
          align-items: center;
          ul {
            text-align: left;
            margin: 0;
            padding: 8px;
            li {
              list-style: none;
              display: inline;
            }
          }
        }
        .tile-title {
          font-size: 1.5em;
          color: #2c3e50;
          font-weight: bold;
          margin: 0;
        }
        .tile-icon {
          height: 100px;
          margin: 10px;
          max-width: 140px;
        }
        .tile-description {
          margin: 10px;
          a {
            color: #2c3e50;
          }
        }
      }
    }

</style>


