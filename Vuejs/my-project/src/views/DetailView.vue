<template>
    <div class="detail mt-2" v-if = "country">
        <h2>{{country.name.common}} Detail Page</h2>
        <div class="card mb-3 mt-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img :src="country.flags.png" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Capital : {{country.capital[0]}}</h5>
                    <p class="card-text pt-2">Population : {{country.population}}</p>
                    <p class="card-text">Region : {{country.region}}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
const axios = require('axios').default;
export default {
    data(){
        return {
            country : null,
        }
    },
    mounted(){
        let name = this.$route.params.name
        axios.get("https://restcountries.com/v3.1/name/" + name)
        .then(response => {
            this.country = response.data[0]
        })
    }
}
</script>

<style scoped>

</style>