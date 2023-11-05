import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FavouriteAvatar from "./favourite";
import ListNumber from "./list";

describe("Render Avatar", () => {
  it("Should be rendered", () => {
    const { baseElement: FavouriteElement } = render(
      <FavouriteAvatar name="initial" />
    );
    const { baseElement: ListData } = render(
      <FavouriteAvatar name="initial" />
    );
    expect(FavouriteElement).toBeTruthy();
    expect(ListData).toBeTruthy();
  });
  //Mock data
  const testData = {
    id: 1,
    first_name: "Ilhim",
    last_name: "Maul",
    phones: [{ number: "085157022076" }, { number: "085123123333" }],
  };

  test("renders ListNumber component with data", () => {
    render(<ListNumber data={testData} />);
    expect(screen.getByText("Ilhim Maul")).toBeInTheDocument();
    expect(screen.getByText("085157022076")).toBeInTheDocument();
    expect(screen.getByText("085123123333")).toBeInTheDocument();
  });

  test("renders ListNumber component without data", () => {
    render(<ListNumber data={null} />);
    expect(screen.queryByText("Ilhim Maul")).not.toBeInTheDocument();
    expect(screen.queryByText("085157022076")).not.toBeInTheDocument();
    expect(screen.queryByText("085123123333")).not.toBeInTheDocument();
  });

  it;
});
