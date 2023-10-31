import { render, screen } from "@testing-library/react"
import TodoFooter from "../../TodoFooter"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min"

const MockFooterFunction=({numberOfIncompleteTasks})=>{
   return  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </BrowserRouter>
}

// use get by text assertions
it("Test no of incomplete Task using :-> Assertions",()=>{
    render(<MockFooterFunction numberOfIncompleteTasks={5}/>)
    const paraElement=screen.getByText(/5 tasks left/i);
    expect(paraElement).toBeInTheDocument();

})



// to  be truthy 

it("To be truthy Task : ",()=>{
    render(<MockFooterFunction numberOfIncompleteTasks={5}/>)
    const paraElement=screen.getByText(/5 tasks left/i)
    expect(paraElement).toBeTruthy();
})


// to be visiable to user or not

it("To be Visable to user : ",()=>{
    render(<MockFooterFunction numberOfIncompleteTasks={0}/>)
    const paraElement=screen.getByText(/0 tasks left/i)
    expect(paraElement).not.toBeVisible();
})


// element contain any html element
it("Contain Html element: ",()=>{
    render(<MockFooterFunction numberOfIncompleteTasks={1234}/>)
    const paraElement=screen.getByText(/1234 tasks left/i)
    expect(paraElement).toContainHTML('p');
})


// to have text content like you are geting the html using test id or by role and you want to search for the html containt any text. 

it("Contain Text : ",()=>{
render(<MockFooterFunction numberOfIncompleteTasks={1}/>)
const paraElement=screen.getByTestId("id123949");
expect(paraElement).toHaveTextContent("1 task left")
})