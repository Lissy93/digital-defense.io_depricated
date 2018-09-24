<template>
  <div class="page-intro">
    <Card class="intro-card">
      <h3>The Situation</h3>
      <p>
        In our increasingly connected world, cyber threats are on the up. 
        Fraud and computer misuse has already overtaken traditional crime, 
        and people of all demographics are being targeted, all the time. 
        <br><br>
        Logs are being kept of almost every interaction that you have with 
        digital devices, advertisers are tracking our browsing, and 
        mass-government surveillance is more pertinent than ever before.
        <br><br>
        All this accumulated personal data has an enormous value attached 
        to it and can be very harmful in the wrong hands, yet a significant 
        amount of this is happening without our knowledge or consent. 
      </p>
    </Card>
    
    <Card class="intro-card">
      <h3>The Aim</h3>
      <p>
        My aim in creating this website, is to outline the common threats, and demonstrate the 
        simple measures that <b>you</b> can take to protect your digital security and privacy.
      </p>
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';



@Component({
  components: {
    Card,
  },
})
export default class PageIntro extends Vue {}

</script>

<style scoped lang="scss">

  .page-intro{
    position: relative;
    z-index: 5;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 2em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .intro-card {
        padding: 1em;
        font-size: 1.2em;
        width: 100%;
        margin: 0.2em auto;

        &:nth-child(1) { margin: -3.5em auto 0.5em auto;}

        @media (min-width: 769px) {
          &:nth-child(1) { 
            width: 65%;
          }
          &:nth-child(2) {
            width: 20%;
            margin: -3.5em auto 0.5em auto;
          }
        }

    }

    
  }

</style>
