
import './App.css';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
