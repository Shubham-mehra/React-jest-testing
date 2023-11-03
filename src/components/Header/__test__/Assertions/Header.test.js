import { render, screen } from "@testing-library/react"
import Header from "../../Header";

it("Test Initial Assertions",()=>{
    render(<Header title={"my Headers"}/>)
    const headingElement=screen.getByText(/headers/i);
    expect(headingElement).toBeInTheDocument();
})

