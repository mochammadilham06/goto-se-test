import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "./header";
import SubHeader from "./subHeader";

describe("Render Header", () => {
  it("Should be rendered Header", () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });
  it("Should be rendered SubHeader", () => {
    const { baseElement } = render(<SubHeader />);
    expect(baseElement).toBeTruthy();
  });
});
