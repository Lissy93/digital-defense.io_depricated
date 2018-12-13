<template>
  <div class="page-intermediate">

      <!-- Page Title -->
      <h1>Personal Cyber Security | TL;DR</h1>

      <!-- Contents -->

      <!-- Introduction -->
      <Card class="view-card" id="intro">
        <MdViewer>{{ require('./../docs/intermediate-intro.md') }}</MdViewer>
      </Card>
  
      <!-- Sec 1 - Passowrds -->
      <Card class="view-card" id="passwords">
        <h2>Passwords</h2>
        <MdViewer>{{ require('./../docs/intermediate-passwords-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="passwordList" title="Strong Password Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-passwords-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 2 - Two-Factor Authentication -->
      <Card class="view-card" id="2-fa">
        <h2>Two-Facto Authentication</h2>
        <MdViewer>{{ require('./../docs/intermediate-2fa-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="twoFaList" title="2-FA Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-2fa-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 3 - Firmware Updates -->
      <Card class="view-card" id="firmware-updates">
        <h2>Firmware and Software Updates</h2>
        <MdViewer>{{ require('./../docs/intermediate-firmware-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="updatesList" title="Software Updates Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-firmware-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 4 - Encryption and Backup -->
      <Card class="view-card" id="encryption-and-backup">
        <h2>Encryption and Backup</h2>
        <MdViewer>{{ require('./../docs/intermediate-encryption-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="encryptionList" title="Encryption and Backup Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-encryption-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 5 - Safe Browsing -->
      <Card class="view-card" id="safe-browsing">
        <h2>Safe Browsing</h2>
        <MdViewer>{{ require('./../docs/intermediate-browsing-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="browsingList" title="Safe Browsing Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-browsing-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 6 - Social Media -->
      <Card class="view-card" id="social-media">
        <h2>Social Media</h2>
        <MdViewer>{{ require('./../docs/intermediate-social-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="socialList" title="Social Media Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-social-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 7 - Smart Phones -->
      <Card class="view-card" id="smart-phones">
        <h2>Smart Phones</h2>
        <MdViewer>{{ require('./../docs/intermediate-phone-start.md') }}</MdViewer>
        <Checklist class="checklist" :theList="phoneList" title="Smart Phone Checklist"/>
        <MdViewer>{{ require('./../docs/intermediate-phone-end.md') }}</MdViewer>
      </Card>

      <!-- Sec 8 - Be weary -->
      <Card class="view-card" id="be-weary">
        <h2>Social Media</h2>
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

import * as listPasswords from './../data/intermediate-password-list.json';
import * as list2Fa from './../data/intermediate-2fa-list.json';
import * as listUpdates from './../data/intermediate-firmware-list.json';
import * as listEncryption from './../data/intermediate-encryption-list.json';
import * as listBrowsing from './../data/intermediate-browsing-list.json';
import * as listSocial from './../data/intermediate-social-list.json';
import * as listPhone from './../data/intermediate-phone-list.json';
import * as listWeary from './../data/intermediate-weary-list.json';

@Component({
    components: {
        Checklist,
        Card,
        MdViewer,
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
