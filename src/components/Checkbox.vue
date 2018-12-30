<template>
    <label class="container">
        <slot></slot>
        <input type="checkbox" v-model="checked">
        <span class="checkmark"></span>
    </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    props: {
        id: String,
    },
    methods: {
        initSeshStorage: () => {
            if (!localStorage.checkedItems) {
                localStorage.checkedItems = JSON.stringify({});
            }
        },
        readFromStorage(id: string) {
            (this as any).initSeshStorage();
            const seshStorage = JSON.parse(localStorage.checkedItems) || {};
            return seshStorage[id] || false;
        },
        storeInStorage(id: string, value: boolean) {
            (this as any).initSeshStorage();
            const seshStorage = JSON.parse(localStorage.checkedItems) || {};
            seshStorage[id] = value;
            localStorage.checkedItems = JSON.stringify(seshStorage);
        },
    },
    data() {
        return {
            isChecked: false,
        };
    },
    computed: {
        checked: {
            get() {
                this.$data.isChecked = (this as any).readFromStorage((this as any).id);
                return this.$data.isChecked;
            },
            set(val) {
                this.$data.isChecked = val;
                (this as any).storeInStorage((this as any).id, val);
            },
            },
    },
})
export default class Checkbox extends Vue {}
</script>

<style scoped lang="scss">
    
    /* Customize the label (the container) */
    .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 1em;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: #ee6e73;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

</style>
