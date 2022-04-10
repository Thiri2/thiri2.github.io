<template>
  <div class="about">
    {{this.$store.state.name}}
    <input type="text" name="" id="" v-model="this.$store.state.name">
    <h1>This is an about page</h1>
    <button @click = 'changeData'>Click</button>
  </div>

  <table border = '1' cellpadding = '10'>
      <thead>
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p v-for="(boy,index) in allBoys" :key="index">{{boy.name}}</p>
          </td>
          <td>
            <p v-for="(boy,index) in allBoys" :key="index">{{boy.age}}</p>
          </td>
          <td>
            <p v-for="(boy,index) in allBoys" :key="index">{{boy.gender}}</p>
          </td>
        </tr>

      </tbody>
    </table>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){

  },
  methods : {
    getData(){

    },
    storeData(){

    },
    changeData(){
      this.$store.dispatch('change')
    }
  },
  computed : {
      allBoys (){
        return this.$store.getters.boys
        // return this.$store.state.students.filter(students => students.)
        //can also do this but we dont use this
      }
    }
}
</script>