import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ButtonCom from ".";
import GroupButton from "./group";

describe("Render Button", () => {
  it("Should be rendered", () => {
    const { baseElement } = render(<ButtonCom title="Click here" />);
    expect(baseElement).toBeTruthy();
  });
  it("Should be can Clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <ButtonCom title="Click here" onClick={handleClick} />
    );
    const button = getByText("Click here");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Should be disabled Button", () => {
    render(<ButtonCom title="Disabled" disable={true} />);
    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();
  });

  it("Should be renders ButtonGroup component with children", () => {
    render(
      <GroupButton>
        <ButtonCom title="Button 1" />
        <ButtonCom title="Button 2" />
      </GroupButton>
    );
    const button1 = screen.getByText("Button 1");
    const button2 = screen.getByText("Button 2");
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
});
