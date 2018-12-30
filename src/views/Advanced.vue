<template>
  <div class="advanced-page">
    <h1>Complete Personal Cyber Security List</h1>

    <!-- 1. Passwords -->
    <Card class="view-card">
        <h2>Passwords</h2>
        <MdViewer>{{ require('./../docs/intermediate-passwords-start.md') }}</MdViewer>
        <TableList :tableRows="passwordList"/>
    </Card>

    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import TableList from '@/components/TableList.vue';
import MdViewer from '@/components/MdViewer.vue';

import * as listPasswords from './../data/advanced-password-list.json';

@Component({
    components: {
        Card,
        TableList,
        MdViewer,
    },
    data: () => {
        return  {
            passwordList: listPasswords.default,
        };
    },
})
export default class Advanced extends Vue {}
</script>

<style lang="scss" scoped>
.advanced-page {
    padding: 0 2em;
    h2 {
        text-align: left;
        margin: 0;
    }
    .view-card{
        margin: 2em auto;
        padding: 1em;
        max-width: 800px;
    }
}
</style>
