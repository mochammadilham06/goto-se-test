import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import PhoneCard from ".";

describe("Render Card", () => {
  it("Should be rendered", () => {
    const { baseElement } = render(<PhoneCard />);
    expect(baseElement).toBeTruthy();
  });
});
