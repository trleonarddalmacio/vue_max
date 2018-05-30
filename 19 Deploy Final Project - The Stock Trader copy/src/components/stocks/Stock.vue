<template>
    <div class="col-sm-6 col-md-4 stock mb-4">
        <div class="card">
            <div class="card-header bg-success text-light">
                <h3 class="card-title">
                    {{ stock.name }}
                    <small class="font-weight-light">(Price: 
                        {{ stock.price }})</small>
                </h3>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model.number="quantity"
                        :class="{danger: insufficientFunds}"
                        >
                </div>
                <div class="float-right">
                    <button
                        class="btn btn-success"
                        @click="buyStock"
                        :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientFunds"
                        >
                        {{ insufficientFunds ? 'No Funds' : 'Buy' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                quantity: this.quantity,
                stockPrice: this.stock.price,
            }
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    }
}
</script>

<style scoped>
    .danger{
        border: 1px solid red;
    }
</style>
