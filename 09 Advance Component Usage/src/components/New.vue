<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase!!</button>
        <p> {{counter}} </p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                counter: 0,
            };
        },

        destroyed() {
            console.log('DES AND TROY!!!');
        },
        deactivated() {
            console.log('_Deactivated_')
        },
        activated() {
            console.log('^Activated^')
        }
    }
</script>

<style scoped>
</style>
