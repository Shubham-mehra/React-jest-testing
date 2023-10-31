import { render, screen } from "@testing-library/react"
import Header from "../Header";


test("",async()=>{
    render (<Header title={"My Header"}/>);
    
    const headingElement=screen.getByText(/header/i);
    expect(headingElement).toBeInTheDocument();
})


it("get Id for Roles",()=>{
    render(<Header title={'my Headers'}/>)
    const headingElement=screen.getByRole('button');
    // heading exist in the file 
    expect(headingElement).toBeInTheDocument();
})

it("get by title",()=>{
    render(<Header title={'my Headers'}/>);
    const headingElement=screen.getByTitle('Test Header');
    expect(headingElement).toHaveAttribute('title','Test Header')
})

it("get by test id",()=>{
    render(<Header title={'my Headers'}/>);
    const headingElement=screen.getByTestId('header-1');
    expect(headingElement).toBeInTheDocument()
})


//find by Text we have to put async and await here because find by expect to be async

it("find by text : ",async()=>{
    render(<Header title={'my Headers'}/>);
    const headingElement=  await screen.findByText(/headers/i);
    expect(headingElement).toBeInTheDocument()
})

/*Keep in mind that "query by" 
methods are recommended over 
"get by" methods when you want 
to perform assertions that check 
if an element might not be present in 
certain situations. If the element is not found, 
the "query by" methods return null, whereas "get by" 
methods would throw an error if the element is not found.
*/

it("Query by",()=>{
    render(<Header title={'my Headers'}/>);
     const headingElement=screen.queryByText(/dogs/i);
    // const headingElements=screen.getByText(/dogs/i); //Thow error because get by send error then the data not found where as query by send null 

    expect(headingElement).not.toBeInTheDocument()
})

it('Get all by Role: ',()=>{
        render(<Header title={"my Header"}/>)
        const headingElements = screen.getAllByRole('heading');
        expect(headingElements[0]).toHaveTextContent('my Header');
        expect(headingElements.length).toBe(2);
    })