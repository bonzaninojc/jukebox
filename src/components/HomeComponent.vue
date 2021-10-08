<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="display-3 text-center font-weight-light my-4">Jukebox</h1>
            </v-col>
            
           <v-col cols="12">
                <v-sheet :elevation="6" class="pa-2 blue darken-1">
                     <v-icon class="white--text mr-3 mb-2">mdi-comment-question</v-icon>
                    <span class="headline white--text font-weight-light">
                        Total de registros cadastrados: {{registerLength}}</span>
                </v-sheet>
           </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    computed:{
        registerLength(){
           return this.$store.getters.lengthRegisters;
        }
    }
}
</script>

<style scoped>

</style>