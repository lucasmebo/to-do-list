<template>
  <TheHeader v-show="showHeader"/>

  <div v-show="showName"> 
    Nome: {{firstName}}
    Sobrenome: {{ lastName }}
  </div>
  <div v-if="acessLevel === 'admin'">Administrador</div>
  <div v-else-if="acessLevel === 'marketing'">Marketing</div>
  <div v-else>Usuário</div>



  <img alt="Vue logo" 
  src="./assets/logo.png">
  <HelloWorld msg="To Do List App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
  }, 
  data() {
    return {
      showHeader: true,
      firstName: 'Lucas',
      lastName: 'Borges',
      showName: false,
      acessLevel: 'admin'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
