import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Tests related to Contact page",()=>{
    it("Should load the component",()=>{
    render(<Contact/>);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
     });

   it("shouls load all input boxes of Contact page",()=>{
    render(<Contact/>);
    const inputbox=screen.getAllByRole("textbox");
    expect(inputbox.length).toBe(2);
    }),

   it("Should load the button",()=>{
    render(<Contact/>);
    const submit=screen.getByText("Submit");
    expect(submit).toBeTruthy();
    });
})
