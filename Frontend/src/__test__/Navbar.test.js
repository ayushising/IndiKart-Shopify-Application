import { render, screen } from "@testing-library/react";
import Footer1 from "../Footer/Footer1";
import Navbar from "../Navbar/Navbar";

describe("Test the App Component", () => {
  test("App testing render", () => {
    const component = render(<Navbar />);
    // const linkElement = component.getByText(/This is React Testing/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test("Footer testing render", () => {
    const { getByLabelText } = render(<Navbar />);
    const component = render(<Navbar />);
    // const linkElement = component.getByText(/This is React Testing/i);
    // expect(linkElement).toBeInTheDocument();
  });
});
