const TodoItem = ({ todo, onToggleDone, onDelete }) => {
  return (
    <div className="todo">
      <li
        onClick={() => onToggleDone(todo.id)}
        className={todo.isDone ? "strikeTodo" : ""}
      >
        {todo.todoText}
      </li>
      <img src="/bin.png" onClick={() => onDelete(todo.id)} alt="delete" />
    </div>
  );
};

export default TodoItem;
