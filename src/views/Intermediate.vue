<template>
  <div class="page-intermediate">

      <!-- Page Title -->
      <h1>Personal Cyber Security | TL;DR</h1>

      <!-- Contents -->
      <Card class="view-card" id="contents">
        
        <h3>Contents</h3>

        <section class="tile-wrapper"> 

          <Tile
              class="tile"
              name="Passwords"
              icon="/img/icon_password.jpg"
              v-scroll-to="'#passwords'"
              color="#f16449"
          />
          <Tile
              class="tile"
              name="2fa"
              icon="/img/icon_2fa.jpg"
              v-scroll-to="'#2-fa'"
              color="#26bdb4"
          />
          <Tile
              class="tile"
              name="Firmware Updates"
              icon="/img/icon_antivirus.jpg"
              v-scroll-to="'#firmware-updates'"
              color="#feca39"
          />
          <Tile
              class="tile"
              name="Encryption and Backup"
              icon="/img/icon_encryption.jpg"
              v-scroll-to="'#encryption-and-backup'"
              color="#d844a2"
          />
          <Tile
              class="tile"
              name="Safe Browsing"
              icon="/img/icon_secure.jpg"
              v-scroll-to="'#safe-browsing'"
              color="#222222"
          />
          <Tile
              class="tile"
              name="Social Media"
              icon="/img/icon_social.jpg"
              v-scroll-to="'#social-media'"
              color="#ff5e4c"
          />
          <Tile
              class="tile"
              name="Smart Phones"
              icon="/img/icon_phone.jpg"
              v-scroll-to="'#smart-phones'"
              color="#f1634a"
          />
          <Tile
              class="tile"
              name="Think before you Click"
              icon="/img/icon_click.jpg"
              v-scroll-to="'#be-weary'"
              color="#a37db8"
          />

        </section>

        <hr>
 
        <MdViewer>{{ require('./../docs/intermediate-intro.md') }}</MdViewer>
      </Card>
  
      <!-- Sec 1 - Passowrds -->
      <Card class="view-card" id="passwords">
        <div class="section-heading" style="background: #f16449;">
          <img src="/img/icon_password.jpg" alt="Passwords">
          <h2>Passwords</h2>
        </div>
        <MdViewer>{{ require('./../docs/intermediate-passwords-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="passwordList" title="Strong Password Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-passwords-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 2 - Two-Factor Authentication -->
      <Card class="view-card" id="2-fa">
        <div class="section-heading" style="background: #26bdb4;">
          <img src="/img/icon_2fa.jpg" alt="2-Factor Authentication">
          <h2>Two-Facto Authentication</h2>
        </div>
        <MdViewer>{{ require('./../docs/intermediate-2fa-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="twoFaList" title="2-FA Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-2fa-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 3 - Firmware Updates -->
      <Card class="view-card" id="firmware-updates">
        <div class="section-heading" style="background: #feca39;">
          <img src="/img/icon_antivirus.jpg" alt="Firmware and Updates">
          <h2>Firmware and Software Updates</h2>
        </div>
        <MdViewer>{{ require('./../docs/intermediate-firmware-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="updatesList" title="Software Updates Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-firmware-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 4 - Encryption and Backup -->
      <Card class="view-card" id="encryption-and-backup">
        <div class="section-heading" style="background: #d844a2;">
          <img src="/img/icon_encryption.jpg" alt="Encryption and Backup">
          <h2>Encryption and Backup</h2>
        </div>
        <MdViewer>{{ require('./../docs/intermediate-encryption-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="encryptionList" title="Encryption and Backup Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-encryption-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 5 - Safe Browsing -->
      <Card class="view-card" id="safe-browsing">
        <div class="section-heading" style="background: #222222;">
          <img src="/img/icon_secure.jpg" alt="Safe Browsing">
          <h2>Safe Browsing</h2>
        </div>
        <MdViewer>{{ require('./../docs/intermediate-browsing-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="browsingList" title="Safe Browsing Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-browsing-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 6 - Social Media -->
      <Card class="view-card" id="social-media">
        <div class="section-heading" style="background: #ff5e4c;">
          <img src="/img/icon_social.jpg" alt="Social Media">
          <h2>Social Media</h2>
        </div>
        <MdViewer>{{ require('./../docs/intermediate-social-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="socialList" title="Social Media Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-social-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 7 - Smart Phones -->
      <Card class="view-card" id="smart-phones">
        <div class="section-heading" style="background: #f1634a;">
          <img src="/img/icon_phone.jpg" alt="Smart Phones">
          <h2>Smart Phones</h2>
        </div>
        <MdViewer>{{ require('./../docs/intermediate-phone-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="phoneList" title="Smart Phone Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-phone-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 8 - Be weary -->
      <Card class="view-card" id="be-weary">
        <div class="section-heading" style="background: #a37db8;">
          <img src="/img/icon_click.jpg" alt="Think before you Click">
          <h2>Be Weary</h2>
        </div>
        <MdViewer>{{ require('./../docs/intermediate-weary-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="wearyList" title="Be Weary Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-weary-end.md') }}</MdViewer>
      </Card>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Checklist } from 'vue-checklist';
import Card from '@/components/Card.vue';
import MdViewer from '@/components/MdViewer.vue';
import * as  VueScrollTo from 'vue-scrollto';
import { Tile } from 'vue-link-grid';

import * as listPasswords from './../data/intermediate-password-list.json';
import * as list2Fa from './../data/intermediate-2fa-list.json';
import * as listUpdates from './../data/intermediate-firmware-list.json';
import * as listEncryption from './../data/intermediate-encryption-list.json';
import * as listBrowsing from './../data/intermediate-browsing-list.json';
import * as listSocial from './../data/intermediate-social-list.json';
import * as listPhone from './../data/intermediate-phone-list.json';
import * as listWeary from './../data/intermediate-weary-list.json';

Vue.use(VueScrollTo);

@Component({
    components: {
        Checklist,
        Card,
        MdViewer,
        Tile,
    },
    data: () => {
      return  {
        passwordList: listPasswords.default,
        twoFaList: list2Fa.default,
        updatesList: listUpdates.default,
        encryptionList: listEncryption.default,
        browsingList: listBrowsing.default,
        socialList: listSocial.default,
        phoneList: listPhone.default,
        wearyList: listWeary.default,
      };
    },
})
export default class Intermediate extends Vue {}


</script>


<style lang="scss">

  .section-heading {
    display: flex;
    align-items: center;
    color: #FFF;
    margin: -1em;
    padding: 0.5em;
    border-radius: 2px;
    box-shadow: inset 0 0 10px #4d4d4d7a;

    img{
      height: 80px;
      margin: 0 0.5em;
    }

    h2{
      color: (rgba(255,255,255,0.8))
    }
  }

  .tile-wrapper {
    display: flex;
    flex-wrap: wrap;

    .tile {
      flex: 1;
      justify-content: space-between;
      flex-flow: column;
      padding: 6px 2px 2px 2px;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      &:hover {
        box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
      }
      .tile-texts {
        color: #FFF;
      }
    }
  }


  /* Icon Bounce */
  .tile {
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .tile .tile-icon {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .tile:hover .tile-icon, .tile:focus .tile-icon, .tile:active .tile-icon {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    // -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }

  .page-intermediate{
    padding: 0 2em;
  }

  .view-card{
    margin: 2em auto;
    padding: 1em;
    max-width: 800px;
  }

  .checklist{
    box-shadow: none !important;
    border: 1px solid #CCC;
    border-radius: 10px;

    .checkbox_label, .header-item{
        font-family: 'Dosis', sans-serif;
    }
    .item-details{
        font-family: 'Raleway', sans-serif;
    }
  }
</style>
