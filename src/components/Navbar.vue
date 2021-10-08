<template>
    <div>
         <v-app-bar
            color="white"
            ligth
            >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Jukebox</v-toolbar-title>
            </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
                >
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                     <router-link to="/">Home</router-link>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <router-link class="link" to="/register">Cadastrar</router-link>
                </v-list-item>

                 <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-sticker-text</v-icon>
                    </v-list-item-icon>
                    <router-link class="link" to="/table">Registros Salvos</router-link>
                </v-list-item>
                </v-list-item-group>
            </v-list>
         </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
    })
}
</script>

<style scoped>
    .link{
        text-decoration: none;
    }
</style>