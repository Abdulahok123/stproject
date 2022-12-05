import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import PostInput from "./components/PostInput/postinput";
import SkillItem from "./components/UserProfile/Skill/SkillItem/skillitem";
import EducationItem from "./components/UserProfile/Education/EducationItem/educationitem";
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

test("Sign In Button Works", () => {
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

test("Post has a Make a Post Heading", () => {
  render(
    <Router>
      <PostInput />
    </Router>
  );
  const linkElement3 = screen.getByRole("heading", { name: "Make a Post" });
  expect(linkElement3).toBeVisible();
});

test("Skill Shows proper skill", () => {
  render(
    <Router>
      <SkillItem sName="My Skill" sType="Coding" />
    </Router>
  );
  const linkElement3 = screen.getByRole("heading", { name: "My Skill" });
  expect(linkElement3).toBeVisible();
});

test("Education Shows Properly", () => {
  render(
    <Router>
      <EducationItem
        startdate="10/5/10"
        enddate="10/5/12"
        institute="LGS"
        degree="Alevel"
        details="Hi"
      />
    </Router>
  );
  const linkElement3 = screen.getByRole("heading", { name: "LGS" });
  expect(linkElement3).toBeVisible();
});
