import { render, screen } from "@testing-library/react";
import App from "../App";

test("it should render", async () => {
  render(<App />);
  expect(
    await screen.findByRole("heading", { name: /hello world!/i }),
  ).toBeInTheDocument();
});
