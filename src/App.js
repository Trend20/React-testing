import "./App.css";
import Counter from "./components/counter/Counter";
import Todos from "./components/todo/Todos";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Login />
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
