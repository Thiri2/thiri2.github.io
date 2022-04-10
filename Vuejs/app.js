const app = Vue.createApp ({
    // 
    // to show or change what you wanna show change hello,vue to this
    // onyl if it's inside div-app
    data(){
        return {
            // template : '<h2>Information</h2>',
            name : 'Thiri', //(propety : value)
            age : 19,
            icon : "<strong>panda<strong>",
            status : true,
            title : 'my paragraph',
            photo : '1.jpg',
            mark : 30,
            favfruits : ['apple', 'papaya', 'lime'],
            count : 0,
            fname : '',
            ffname : '',
            ffage : '',
            ffgender : '',
            friends : [],
        }
    },
    methods:{
        greet () {
            alert (`Hello ${this.name}!`)
        },
        savefriends(){
            let friend = {name : this.ffname, age : this.ffage , gender : this.ffgender}
            console.log(friend);
            this.friends.push(friend)
        }
    }
})

//console.log(app);
app.mount('#app') //use DOM <div>
