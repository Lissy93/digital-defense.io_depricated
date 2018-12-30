<template>
  <table>
        <thead>
            <tr>
                <th>Ttitle</th>
                <th>Priority</th>
                <th>Description</th>
                <th>Done</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="tableRow in tableRows" v-bind:key="tableRow.title">
                <td>{{ tableRow.title }}</td>
                <td>{{ tableRow.priority }}</td>
                <td v-html="tableRow.description"></td>
                <td>
                    <Checkbox :id="tableRow.title">Done</Checkbox>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Checkbox from '@/components/Checkbox.vue';


@Component({
    props: {
        tableRows: Array,
    },
    components: {
        Checkbox,
    },
})
export default class TableList extends Vue {}
</script>

<style scoped lang="scss">

table{
    text-align: left;
    font-family:  'Raleway', sans-serif;
    font-size: 1em;
    thead th{
        font-family: 'Dosis', sans-serif;
        font-size: 1.5em;
        font-weight: 400;
    }
    td{
        padding: 0.5em;
        border: 1px solid #e5e5e5;
    }
    /deep/ a {
        color: #89a9c9;
    }
}

</style>
