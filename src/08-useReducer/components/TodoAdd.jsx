import { useForm } from "../../hooks/useForm";

export default function TodoAdd({ handleNewTodo }) {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onNewTodo = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    const onNewTodoList = {
      id: new Date().getTime(),
      done: false,
      description,
    };

    handleNewTodo(onNewTodoList);
    onResetForm();
  };

  return (
    <form onSubmit={onNewTodo}>
      <input
        type="text"
        placeholder="What to do?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
}
