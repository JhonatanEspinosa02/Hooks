import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react";

describe("useForm test", () => {
  const inputValue = {
    name: "Jhonatan",
    email: "jhonatan.espinosa@gmail.com",
  };

  test("It should return default values", () => {
    const { result } = renderHook(() => useForm(inputValue));

    expect(result.current).toEqual({
      name: inputValue.name,
      email: inputValue.email,
      formState: inputValue,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("It should change inputValue in the form", () => {
    const newValue = "Alexa";
    const { result } = renderHook(() => useForm(inputValue));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("It should reset the form", () => {
    const newValue = "Alexa";
    const { result } = renderHook(() => useForm(inputValue));
    const { onInputChange, onResetForm } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(inputValue.name);
    expect(result.current.formState.name).toBe(inputValue.name);

    act(() => {});
  });
});
