<template>
  <div class="advanced-page">
    <h1>This is an Advanced page</h1>
    <Card>
        <h2>Passwords</h2>
        <TableList :tableRows="passwordList"/>
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import TableList from '@/components/TableList.vue';

import * as listPasswords from './../data/advanced-password-list.json';

@Component({
    components: {
        Card,
        TableList,
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
}
</style>
