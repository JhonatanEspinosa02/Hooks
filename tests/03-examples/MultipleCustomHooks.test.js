import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("It should test <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("It should render the component by default", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Pokemon's information"));
    expect(screen.getByText("Loading..."));
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    const beforeButton = screen.getByRole("button", { name: "Anterior" });
    expect(nextButton).toBeTruthy();
    expect(beforeButton).toBeTruthy();
  });

  test("It should show a pokemon image", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Bulbasaur",
        sprites: {
          front_default: "front_default",
          front_shiny: "front_shiny",
          back_default: "back_default",
          back_shiny: "back_shiny",
        },
      },
      isLoading: false,
      hasError: false,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("#1 - Bulbasaur")).toBeTruthy();
  });

  test("It should check for the increment button", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Bulbasaur",
        sprites: {
          front_default: "front_default",
          front_shiny: "front_shiny",
          back_default: "back_default",
          back_shiny: "back_shiny",
        },
      },
      isLoading: false,
      hasError: false,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
