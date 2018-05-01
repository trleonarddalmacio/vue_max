<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User's Name: {{ switchName() }}</p>
        <p>User's Age: {{ userAge}} </p>
        <button @click="resetName"> Reset Name </button>
        <button @click="resetFnName"> Reset Function </button>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        props: {
            myName: {
                type: String,
                // default: 'Leo Default'
                // required: true;
            },  // [String, Array]
            resetFnName: {
                type: Function
            },
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Leo';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }

</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
