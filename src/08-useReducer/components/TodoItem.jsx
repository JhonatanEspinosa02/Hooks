export default function TodoItem({ todo, handleDeleteTodo, handleToogle }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        aria-label="span"
        onClick={() => handleToogle(todo.id)}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
