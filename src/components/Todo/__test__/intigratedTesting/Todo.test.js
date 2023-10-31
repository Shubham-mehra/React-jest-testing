import { fireEvent, render, screen } from "@testing-library/react"
import Todo from "../../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


const mockComponent = () => {
    return <BrowserRouter>
        <Todo  />
    </BrowserRouter>
}

const addTasklist=(tasks)=>{
    const inputFieldElement=screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement=screen.getByRole('button',{name:/Add/i});
   tasks.forEach(task => {
    fireEvent.change(inputFieldElement,{target:{value:task}});
    fireEvent.click(buttonElement);
   });
}

// Intigrated Testing for check multiple Component Intract with each other: 
describe("Todo Component: ", () => {

    // this is for Check The input field is render or not 
    it("Should render same which is passed in title Props or add input component", async () => {
        render(mockComponent())
       addTasklist(['Get me my food !'])
        const divElement=screen.getByText(/Get me my food !/i);
        expect(divElement).toBeInTheDocument();
    })

    // get all by array for all the to do items

    it("Get all values in the task-container", async () => {
        render(mockComponent())
        addTasklist(['Get me my food !','pet my dog','go to office'])
        const divElement=screen.getAllByTestId('Task-Container');
        expect(divElement.length).toBe(3);
    })

    // initial load of todo list 
    it("do not add todo-active-class for change style of completed task: ", async () => {
        render(mockComponent())
        addTasklist(['Get me my food !'])
        const divElement=screen.getByText(/Get me my food !/i);
        expect(divElement).not.toHaveClass('todo-item-active')
    })


    // change text style when click on task
    it("Should change the style when click on the task", async () => {
        render(mockComponent())
        addTasklist(['Get me my food !'])
        const divElement=screen.getByText(/Get me my food !/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass('todo-item-active')
    })



})