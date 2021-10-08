import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        registros: [],
    },
    mutations:{

        setRegistro(state,payload){
          state.registros.push(payload);
        },

        delete(state,i){
          state.registros.splice(i,1);
        },

        editRegister(state,payload){
          let id = payload.id;
          let remover = payload.id +1
          delete payload.id;
          state.registros.splice(id,0,payload)
          state.registros.splice(remover,1)
        }
    },
    
    getters:{
        allRegister(state){
          return state.registros;
        },

       getInfo: (state) => (i) => {
          console.log(`getinfo index: ${i}`)
          console.log(`${state.registros.filter( (user,index) => index == i)}`)
          console.log(state.registros)
          return i;
       },

       lengthRegisters(state){
         return state.registros.length;
       }
    }
})
