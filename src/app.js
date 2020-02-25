import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: {
        rates:'',
        base:'',
        date:''
      }

    },
    mounted(){
      this.fetchRates()
    },
    methods: {
      fetchRates: function (){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then((response) => response.json())
        .then((data) => this.currencies = data)
      }
    },
  })
})
