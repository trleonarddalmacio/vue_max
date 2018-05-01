<template>
    <div class="container">
        <app-new-quote @quoteAdded="addQuote($event)"></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
    import NewQuote from './components/NewQuote.vue'
    import QuoteGrid from './components/QuoteGrid.vue';

    export default {
        data: function() {
            return {
                quotes: [
                    'Just a Quote to see something'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            addQuote(newQuote) {
                if (this.quotes.length != 10)
                    this.quotes.push(newQuote);
            }
        },

        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        }
    }
</script>

<style>
</style>
