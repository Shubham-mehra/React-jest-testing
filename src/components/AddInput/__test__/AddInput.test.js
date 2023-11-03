import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import AddInput from "../AddInput"

const mockFunction = jest.fn();


// Grouping the Event Test : 
describe("Add input Test", () => {

    // this is for Check The input field is render or not 
    it("Should render input field", async () => {
        render(<AddInput
            todos={[]}
            setTodos={mockFunction} />);
        const renderInputField = await screen.getByPlaceholderText(/Add a new task here.../i)
        expect(renderInputField).toBeInTheDocument();
    })

    // for fire change event on the inputfield
    it("Fire Change event in the Input field : ", async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockFunction} />
        )
        const renderedInputField = await screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(renderedInputField, { target: { value: "Get Me Food !" } });
        expect(renderedInputField.value).toBe("Get Me Food !")
    })


    // get click button
    it('Check if Click Button and put input field to empty: ', async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockFunction} />
        );
        const addButton = await screen.getByRole('button');
        const renderedInputField = await screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(renderedInputField, { target: { value: "Get Me Food" } })
        fireEvent.click(addButton);
        expect(renderedInputField.value).toEqual("");
    })

})



// testing the Keyboard Intraction : Testing
describe("Test Fire events ", () => {
    it("Focus", async () => {
        render(<AddInput
            todos={[]}
            setTodos={mockFunction} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

        // screen.debug()
        expect(inputElement).toBeInTheDocument();
        fireEvent.focus(inputElement);

        await waitFor(() => {
            const messagePara = screen.getByTestId('message');

            expect(messagePara).toBeInTheDocument();
        })

    })
})


// Test spy on Function in RTL 


describe("Spy On Testing ! ", () => {
    it("Spy On testing : ", () => {
        const spyLog = jest.spyOn(console, 'log');

        const { getByTestId } = render(<AddInput todos={[]} setTodos={mockFunction} />);
        const testButton = screen.getByTestId('btn-Add');
        fireEvent.click(testButton);
        expect(spyLog).toHaveBeenCalledWith('This console is for Testing Purpose !');
        spyLog.mockRestore()
    })
})
