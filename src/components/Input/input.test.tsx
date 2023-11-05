import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./search";

describe("Input Component", () => {
  it("Should be render", () => {
    const { baseElement } = render(
      <SearchInput onSearch={() => {}} search="" />
    );
    expect(baseElement).toBeTruthy();
  });

  it("Should calls onSearch function on input change", () => {
    const mockOnSearch = jest.fn();
    render(<SearchInput onSearch={mockOnSearch} search="" />);
    const inputElement = screen.getByPlaceholderText("Search");

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(mockOnSearch).toHaveBeenCalledWith("test");
  });

  it("Should renders SearchInput with initial search value", () => {
    render(<SearchInput onSearch={() => {}} search="initialValue" />);
    const inputElement = screen.getByDisplayValue("initialValue");
    expect(inputElement).toBeInTheDocument();
  });
});
