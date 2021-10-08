<template>
    <form>
       
       <v-container>

            <h1 v-if="! info($route.params.index)" class="display-2 font-weight-light text-center my-2">Cadastrar Usuario</h1>

            <div v-else class=" my-2">
                <h1 class="display-2 font-weight-light text-center my-2">Editar usuário</h1>
            </div>

            <v-row no-gutters>
                <v-col cols="12" lg="5">
                     <v-text-field class="ml-md-4" :rules="geralRules" v-model="nome" label="Nome" required/>
                </v-col>
                 <v-col cols="12" lg="5">
                      <v-text-field class="ml-md-10" :rules="geralRules" v-model="sobrenome" label="Sobrenome" required/>
                </v-col>
            </v-row>
             <v-row no-gutters>
                <v-col cols="12" lg="5">
                     <v-text-field class="ml-md-4" :rules="geralRules" v-model="email" label="Email" required/>
                </v-col>
                 <v-col cols="12" lg="5">
                      <v-text-field class="ml-md-10" :rules="geralRules" v-model="telefone" label="Telefone" required/>
                </v-col>
            </v-row>

            <v-row no-gutters>
                <v-col cols="12" lg="5">
                    <v-checkbox hide-details class="ml-md-4" color="info" @click="show = !show" label="Aperte caso for pessoa jurídica" />
                </v-col>
                 <v-col cols="12" lg="5" >
                      <v-text-field class="ml-md-10" v-if="juridica" :rules="geralRules" v-model="cnpj" label="CNPJ" required/>

                       <v-text-field class="ml-md-10" v-else :rules="geralRules" v-model="cpf" label="CPF" required/>
                </v-col>
            </v-row>

            <v-row >
               <v-col class="ml-md-auto" cols="3"> 
                   <v-btn @click="enviar" v-if="! info($route.params.index)" elevation="2" outlined>Enviar</v-btn>

                    <v-btn @click="editar($route.params.index)" v-else elevation="2" outlined>Enviar</v-btn>  
               </v-col>
            </v-row>
            
            <v-row >
               <v-col class="ml-md-auto" cols="12"> 
                <v-sheet :elevation="6" v-if="success" class="pa-2 green lighten-1">
                     <span class="headline white--text font-weight-light">Cadastro feito com sucesso</span>

                     <v-btn :elevation="2" class=" ml-3 white--text" outlined @click="final">Ok</v-btn>    
                </v-sheet>

                 <v-sheet :elevation="6" v-if="erro" class="pa-2 red darken-3">
                     <span class="headline white--text font-weight-light">Por favor verifique se os campos estão preenchidos</span>    
                </v-sheet>         
               </v-col>
            </v-row>          
        </v-container>      
    </form>  
</template>

<script>
export default {
    data(){
        
        return{
            nome: '',
            sobrenome: '',
            email: '',
            telefone: '',
            juridica: false,
            cpf: '',
            cnpj: '',
            show: false,
            erro: false,
            success: false,
            geralRules:[
                 v => !!v || 'Campo obrigatório',
            ],
        }
    },

    watch:{
        show(newValue){
           this.juridica = newValue
        },
    },
    
    methods:{
        
        info(i){

            return  this.$store.getters.getInfo(i);
        },

        final(){
            this.nome = '',
            this.sobrenome = '',
            this.email= '',
            this.telefone='',
            this.cpf='',
            this.cnpj='',
            this.erro = false,
            this.success = false
        },

        validar(){
            let check = true

            if(this.nome.length == 0 || this.sobrenome.length == 0 || this.email.length == 0 || this.telefone.length == 0 ){
               
                check = false
            }

            if(this.juridica == true && this.cnpj.length == 0){
                 
                 check = false
            }

            if(this.juridica == false && this.cpf.length == 0){
               
                check = false
            }

            return check;
        },
        enviar(){
             if(this.validar()){
                this.erro = false
                let user = {
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                    email: this.email,
                    telefone: this.telefone,
                    juridica: this.juridica,
                    cpf: this.cpf,
                    cnpj: this.cnpj,
                }
                this.$store.commit('setRegistro',user)
                this.success = true
            }else{
                this.erro = true
                this.success = false
            }
        },

        editar(i){
            if(this.validar()){
                this.erro = false
                let user = {
                    id: i,
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                    email: this.email,
                    telefone: this.telefone,
                    juridica: this.juridica,
                    cpf: this.cpf,
                    cnpj: this.cnpj,
                }
                this.$store.commit('editRegister',user)
                this.success = true
            }else{
                this.erro = true
                this.success = false
            }
        }
    }
}
</script>

<style scoped>
    form{
        border: 1px solid #c1c1c1;
    }
</style>