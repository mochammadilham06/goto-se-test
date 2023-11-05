import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Spinner from ".";

describe("Render Spinner", () => {
  it("Should be rendered", () => {
    const { baseElement } = render(<Spinner />);
    expect(baseElement).toBeTruthy();
  });
});
