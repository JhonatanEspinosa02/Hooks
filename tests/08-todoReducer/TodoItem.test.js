import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../src/08-useReducer/components/TodoItem";

describe("TodoReducer test", () => {
  const todo = {
    id: 1,
    description: "Souls' stone",
    done: false,
  };

  const onToogleTodoMock = jest.fn();
  const onDeleteTodoMock = jest.fn();

  test("It should show pendient tasks to complete", () => {
    render(
      <TodoItem
        todo={todo}
        handleDeleteTodo={onDeleteTodoMock}
        handleToogle={onToogleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanItem = screen.getByLabelText("span");
    expect(spanItem.className).toContain("align-self-center");
    expect(spanItem.className).not.toContain("text-decoration-line-through");
  });

  test("It should show complete tasks", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        handleDeleteTodo={onDeleteTodoMock}
        handleToogle={onToogleTodoMock}
      />
    );

    const spanItem = screen.getByLabelText("span");
    expect(spanItem.className).toContain("text-decoration-line-through");
  });

  test("It should call Toggle when click on it", () => {
    render(
      <TodoItem
        todo={todo}
        handleDeleteTodo={onDeleteTodoMock}
        handleToogle={onToogleTodoMock}
      />
    );

    const spanItem = screen.getByLabelText("span");
    fireEvent.click(spanItem);
    expect(onToogleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("It should call delete when click on it", () => {
    render(
      <TodoItem
        todo={todo}
        handleDeleteTodo={onDeleteTodoMock}
        handleToogle={onToogleTodoMock}
      />
    );

    const buttonDelete = screen.getByRole("button");
    fireEvent.click(buttonDelete);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
