import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
test("Sign Up Button Works", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement0 = screen.getByRole("button", { name: "Sign Up" });
  fireEvent.click(linkElement0);
  const linkElement3 = screen.getByRole("heading", { name: "Create Account" });
  expect(linkElement3).toBeInTheDocument();
});

test("Sign Up Button Works", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement1 = screen.getByRole("button", { name: "Sign Up" });
  fireEvent.click(linkElement1);
  const linkElement0 = screen.getByRole("button", { name: "Sign in" });
  fireEvent.click(linkElement0);
  const linkElement3 = screen.getByRole("heading", {
    name: "Login to your Account",
  });
  expect(linkElement3).toBeInTheDocument();
});

test("Sign Up Elements Visible", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement0 = screen.getByRole("button", { name: "Sign Up" });
  fireEvent.click(linkElement0);
  const linkElement3 = screen.getByRole("heading", { name: "Create Account" });
  expect(linkElement3).toBeVisible();
  const linkElement4 = screen.getByPlaceholderText("First Name");
  expect(linkElement4).toBeVisible();
  const linkElement5 = screen.getByPlaceholderText("Last Name");
  expect(linkElement5).toBeVisible();
  const linkElement6 = screen.getByPlaceholderText("Email");
  expect(linkElement6).toBeVisible();
  const linkElement7 = screen.getByPlaceholderText("Password");
  expect(linkElement7).toBeVisible();
  const linkElement8 = screen.getByPlaceholderText("Date of Birth");
  expect(linkElement8).toBeVisible();
  const linkElement9 = screen.getByPlaceholderText("Profile Image");
  expect(linkElement9).toBeVisible();
  const linkElement10 = screen.getByPlaceholderText("Description");
  expect(linkElement10).toBeVisible();
  const linkElement11 = screen.getByTitle("role");
  expect(linkElement11).toBeVisible();
});
