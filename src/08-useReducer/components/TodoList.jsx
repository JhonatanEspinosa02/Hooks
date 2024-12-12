import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleDeleteTodo, handleToogle }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleToogle={handleToogle}
        />
      ))}
    </ul>
  );
}
