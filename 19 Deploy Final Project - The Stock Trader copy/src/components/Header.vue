<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                Stock Trader
            </router-link>

            <div 
                class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav mr-auto">
                    <router-link
                        class="nav-item"
                        to="/portfolio" 
                        activeClass="active"
                        tag="li">
                        <a class="nav-link">Portfolio</a>
                    </router-link>

                    <router-link
                        class="nav-item"
                        to="/stocks" 
                        activeClass="active"
                        tag="li">
                        <a class="nav-link">Stocks</a>
                    </router-link>
                </ul>
                
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#"
                        @click="endDay">End Day</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#"    id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Save & Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#" 
                            @click="saveData">Save Data</a>
                            <a class="dropdown-item" href="#"
                            @click="loadData">Load Data</a>
                        </div>
                    </li>

                    <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
                </ul>
                
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData',
        }),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio:this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks,
            }
            this.$http.put('data.json', data);
        },
        loadData() {
            this.fetchData();
        }
    }
}
</script>
