import { createStore } from 'vuex'

export default createStore({
  state: { //can call from any other component
    name : 'Thiri Aung',
    students : [
      {name : 'Su', age : 20 , gender : 'female'},
      {name : 'Mg', age : 25 , gender : 'male'},
      {name : 'Ag', age : 21 , gender : 'female'},
      {name : 'Kyaw', age : 29 , gender : 'male'},
    ]
  },
  mutations: {
    change(state){
      state.name = 'Mg Mg'
    }
  },
  actions: { //component same as - method [change state]
    change(store){
      store.commit('change')
    }
  },
  getters: {
    boys (state) {
      return state.students.filter(student => student.gender=='male')
    }
  },
  modules: {
  }
})
