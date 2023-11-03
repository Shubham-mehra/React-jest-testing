import { render, screen } from "@testing-library/react"
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


const MockFollowersList=()=>{
    return (<BrowserRouter>
    <FollowersList/>
    </BrowserRouter>)
}
describe("Description Follower List: ",()=>{
    it("Follower list", async()=>{
        render(<MockFollowersList/>)
       
        const FollowersListElement= await screen.findByTestId('follower-list-0');
        // screen.debug()
        expect(FollowersListElement).toBeInTheDocument();
    })

    // it("Follower all list", async()=>{
    //     render(<MockFollowersList/>)
    //     const FollowersListElements=await screen.findAllByTestId(/follower-list/i);
    //     expect(FollowersListElements.length).toBe(5);
    // })
})
