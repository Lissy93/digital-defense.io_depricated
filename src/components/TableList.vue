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
                <td class="subheading-col">
                    {{ tableRow.title }}
                </td>
                <td class="priority-col" :class="`priority-${tableRow.priority}`">
                    <span>
                        {{ tableRow.priority }}
                    </span>
                </td>
                <td v-html="tableRow.description"></td>
                <td class="checkbox-col">
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
  @import '../styles/colors';

    table{
        text-align: left;
        font-family:  'Raleway', sans-serif;
        font-size: 1em;
        color: $primary;
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
            color: $secondary;
        }
        .subheading-col {
            min-width: 8rem;
        }
        .priority-col {
            span {
                border-radius: 10px;
                padding: 0.5em;
                text-transform: capitalize;
                cursor: default;
            }
            &.priority-recommended span {
                background: #caebca;
            }
            &.priority-optional span {
                background: #f8d79a;
            }
            &.priority-advanced span {
                background: #efc0c0;
            }
        }
    }

    @media (max-width: 769px) {
        table {
            thead {
                display: none;
            }
            tr {
                display: flex;
                flex-direction: column;
                .subheading-col {
                    font-weight: bold;
                    text-align: center;
                    margin-top: 1.5em;
                }
                .priority-col {
                    text-align: center;
                        font-style: italic;
                        &.priority-recommended {
                            background: #caebca;
                        }
                        &.priority-optional {
                            background: #f8d79a;
                        }
                        &.priority-advanced {
                            background: #efc0c0;
                        }
                }
                .checkbox-col {
                    display: none;
                }
            }
        }
    }
</style>
