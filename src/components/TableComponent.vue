<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-simple-table fixed-header height="250px">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">Nome Completo</th>
                                <th class="text-left">Email</th>
                                <th class="text-left">Telefone</th>
                                <th class="text-left">Juridica</th>
                                <th class="text-left">CPF</th>
                                <th class="text-left">CNPJ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(register,i)  in registers" :key="register.email">
                               <td>{{completeName(register.nome,register.sobrenome)}}</td>
                                <td>{{register.email}} {{i}} </td>
                                <td>{{register.telefone}}</td>
                                <td>{{register.juridica}}</td>
                                <td>{{register.cpf}}</td>
                                <td>{{register.cnpj}}</td>
                                <td>
                                    <v-btn elevation="2" :to="`/register/${i}/editar`" small class="blue         lighten-1              white--text">Editar</v-btn>
                                </td>
                                <td>
                                    <v-btn elevation="2" small @click="erase(i)"  class="red darken-1      white--text">X</v-btn>
                                </td>
                            </tr>
                     </tbody>
                    </template>
             </v-simple-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
   computed:{
       registers(){
           return this.$store.getters.allRegister
       },
   },
   methods:{
        completeName(name, surname){
           return `${name} ${surname}`
        },
        
        erase(i){
            this.$store.commit('delete',i);
        }
   }
}
</script>

<style scoped>
    
</style>