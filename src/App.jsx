import { useState } from 'react'
import './App.css';
import Todo from './components/Todo';
import { TodoForm } from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer projetos em React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Entregar relatorio para meu coordenador",
      category: "Trabalho",
      isCompleted: false,
    }
  ]);
  return (
    <div className='app'> 
      <h1> Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </div>
      <TodoForm />
    </div>
  )
}

export default App;
