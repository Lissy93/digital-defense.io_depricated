<template>
  <footer>
      <div class="footer-item">
        <a href="/">Cyber Security Today</a>
      </div>
 
      <div class="footer-item">
          Site Map
      </div>
      <div class="footer-item">
          Legal
      </div>
    <div class="footer-item">
          &copy; <a href="https://aliciasykes.com">Alicia Sykes</a> 2018. 
          Licensed under <a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a>.
      </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
    footer {
        width: 100%;
        margin: 0;
        background: darken(#fafafa, 10);
        display: flex;
        font-family: 'Raleway', sans-serif;
        padding-top: 0.15em;
        .footer-item{
            flex-grow: 1;
            padding: 1em;
            color: #2c3e50;
            a{
                color: #2c3e50;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
</style>
