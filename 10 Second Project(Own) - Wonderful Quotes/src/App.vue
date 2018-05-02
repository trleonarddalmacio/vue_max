<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="addQuote($event)"></app-new-quote>
        <app-quote-grid 
        :quotes="quotes"
        @quoteDeleted="removeQuote($event)"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to Delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewQuote from './components/NewQuote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import Header from './components/Header.vue';

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
                if (this.quotes.length >= this.maxQuotes)
                    return alert('Please delete Quotes first!');
                this.quotes.push(newQuote);
            },
            removeQuote(index) {
                this.quotes.splice(index, 1);
            }
        },

        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
