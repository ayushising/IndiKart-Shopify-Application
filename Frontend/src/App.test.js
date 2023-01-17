import { render, screen } from "@testing-library/react";
import App from "./App";
import Footer1 from "./components/Footer/Footer1";
import Login from "./components/Login";

describe("Test the App Component", () => {
  test("App testing render", () => {
    const component = render(<App />);
    const linkElement = component.getByText(/This is React Testing/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("render login component in doucment", () => {
    const { getByLabelText } = render(<App />);
    const childElement = getByLabelText("Email");
    expect(childElement).toBeTruthy();
  });
  test("Footer testing render", () => {
    const { getByLabelText } = render(<App />);

    const component = render(<Footer1 />);
    const linkElement = component.getByText(/This is React Testing/i);
    expect(linkElement).toBeInTheDocument();
  });
});
