import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Container from ".";

describe("Render Container", () => {
  it("Should be rendered", () => {
    const { baseElement } = render(<Container />);
    expect(baseElement).toBeTruthy();
  });
});
