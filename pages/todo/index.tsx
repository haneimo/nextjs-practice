import { useState } from "react";

const App = () => {
  // 作成したtodoを入れておくためのstate
  const [todos, setTodos] = useState([]);
  // フォームに入力された値をtodoに登録するまでに入れておくためのstate
  const [tmpTodo, setTmpTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, tmpTodo]);
    setTmpTodo("");
  };

  return (
    <>
      <h1>Todo App</h1>
      <div className="form">
        <input
          type="text"
          name="todo"
          // formの入力値をtmpTodoで持っておく
          onChange={e => setTmpTodo(e.target.value)}
          value={tmpTodo}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </>
  );
};

export default App;