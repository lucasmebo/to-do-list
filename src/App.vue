<template>
 <TheHeader v-show="showHeader"/>

  <div v-show="showName"> 
    Nome: {{firstName}} {{ lastName }}
  </div>
  <div v-if="acessLevel === 'admin'">Administrador</div>
  <div v-else-if="acessLevel === 'marketing'">Marketing</div>
  <div v-else>Usuário</div>
  <img 
    v-bind:src="imgSrc" 
    v-bind:alt="imgAlt">
  <div 
    v-for="(obj, index) in todos"
    v-bind:key="obj.id"
    class="todos-item"
  >
    {{ index }} - {{ obj.title }}
  {{ obj.title }}
  </div>

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
      showName: true,
      acessLevel: 'admin',
      imgSrc: 'https://placehold.co/150',
      imgAlt: 'Foto do usuário',
      todos: [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
]
    }
  }
}
</script>

<style>
.todos-item {
  background: #2c3e50;
  margin: 0 0 5px 0;
  padding: 3px 6px;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}

</style>
