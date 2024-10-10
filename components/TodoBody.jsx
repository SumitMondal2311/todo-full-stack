import { useState, useRef } from "react";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";

const TodoBody = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const inputRef = useRef(null);

  const addTodo = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;

    const UUID = crypto.randomUUID();
    setTodos([...todos, { id: UUID, todoText, isDone: false }]);
    setTodoText("");
    inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markAsDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const doneTodos = todos.filter((todo) => todo.isDone).length;
  const pendingTodos = todos.length - doneTodos;

  return (
    <>
      <TodoHeader done={doneTodos} pending={pendingTodos} />
      <div className="todoBody">
        <form onSubmit={addTodo}>
          <input
            type="text"
            ref={inputRef}
            autoFocus
            value={todoText}
            onChange={(e) => setTodoText(e.target.value.slice(0, 100))}
          />
          <button type="submit" disabled={todoText.trim() === ""}>
            Add Todo
          </button>
        </form>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={markAsDone}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </>
  );
};

export default TodoBody;
