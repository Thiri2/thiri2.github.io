const bmi = Vue.createApp ({
    data(){
        return {
            weight : '',
            height  :'',
            bmino : '',
            result : '',        
        }
    },
    methods:{
        calculate(){
            var weight = this.weight;
            var height = (this.height) /100;
            this.result = (weight / (height*height)).toFixed(1);
        }
    }
})

bmi.mount('#bmi')

