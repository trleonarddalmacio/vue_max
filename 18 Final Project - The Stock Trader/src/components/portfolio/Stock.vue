<template>
    <div class="col-sm-6 col-md-4 stock mb-4">
        <div class="card">
            <div class="card-header bg-success text-light">
                <h3 class="card-title">
                    {{ stock.name }}
                    <small class="font-weight-light">(Price: 
                        {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model.number="quantity"
                        >
                </div>
                <div class="float-right">
                    <button
                        class="btn btn-success"
                        @click="sellStock"
                        :disabled="quantity <= 0 || !Number.isInteger(quantity) || quantity > stock.quantity">
                        Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions }from 'vuex';

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
        }
    },
    methods: {
        ...mapActions([
            'sellStock'
        ]),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            // this.sellStock();
            this.$store.dispatch('sellStock', order);
            this.quantity = 0;
        }
    }
}
</script>
