import { useState, useEffect } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  // fetch todos
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        console.log(res.data);
        setTodos(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="todos-container">
      <h1>My Todos</h1>
      {todos.map((todo) => {
        return <li data-testid="todo">{todo.title}</li>;
      })}
    </div>
  );
};

export default Todos;
