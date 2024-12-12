import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe("TodoReducer test", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("It should return the initial state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("It should add a TODO", () => {
    const action = {
      type: "Add todo",
      payload: {
        id: 2,
        description: "New TODO",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("It should delete a TODO", () => {
    const action = {
      type: "Delete todo item",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("It should check for the toggle state", () => {
    const action = {
      type: "Toogle",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
