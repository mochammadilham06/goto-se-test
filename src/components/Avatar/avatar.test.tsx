import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FavouriteAvatar from "./favourite";
import ListNumber from "./list";

describe("Render Avatar", () => {
  //Mock data
  const data = [
    {
      id: 1,
      first_name: "Ilhim",
      last_name: "Maul",
      phones: [{ number: "085157022076" }, { number: "085123123333" }],
    },
  ];
  const testData = {
    id: 1,
    first_name: "Ilhim",
    last_name: "Maul",
    phones: [{ number: "085157022076" }, { number: "085123123333" }],
  };

  it("Should be rendered", () => {
    const { baseElement: FavouriteElement } = render(
      <FavouriteAvatar favouriteContacts={data} />
    );
    const { baseElement: ListData } = render(<ListNumber data={testData} />);
    expect(FavouriteElement).toBeTruthy();
    expect(ListData).toBeTruthy();
  });

  it("renders ListNumber component with data", () => {
    render(<ListNumber data={testData} />);
    expect(screen.getByText("Ilhim Maul")).toBeInTheDocument();
    expect(screen.getByText("085157022076")).toBeInTheDocument();
    expect(screen.getByText("085123123333")).toBeInTheDocument();
  });

  it("renders ListNumber component without data", () => {
    render(<ListNumber data={null} />);
    expect(screen.queryByText("Ilhim Maul")).not.toBeInTheDocument();
    expect(screen.queryByText("085157022076")).not.toBeInTheDocument();
    expect(screen.queryByText("085123123333")).not.toBeInTheDocument();
  });

  it;
});
