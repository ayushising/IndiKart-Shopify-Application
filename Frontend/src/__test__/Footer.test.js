import { render, screen } from "@testing-library/react";
import Footer1 from "../Footer/Footer1";

describe("Test the App Component", () => {
  test("App testing render", () => {
    const component = render(<Footer1 />);
    // const linkElement = component.getByText(/This is React Testing/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test("Footer testing render", () => {
    const { getByLabelText } = render(<Footer1 />);
    const component = render(<Footer1 />);
    // const linkElement = component.getByText(/This is React Testing/i);
    // expect(linkElement).toBeInTheDocument();
  });
});
