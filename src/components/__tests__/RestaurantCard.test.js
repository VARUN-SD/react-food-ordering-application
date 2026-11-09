import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import { MOCK_DATA } from "../mocks/resCardMock";
import "@testing-library/jest-dom";


it("Should load Restaurant component with props",()=>{
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    );

    const resName=screen.getByText("Pizza Paradise");
    expect(resName).toBeInTheDocument();
});

