import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { BrowserRouter } from "react-router"
import { act } from "@testing-library/react";
import MockList from "../mocks/resListmock.json"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>Promise.resolve({
        json:()=>Promise.resolve(MockList)}))

it("Should Search Restaurant cards for search Input",async()=>{
    await act(async()=>
        render(<BrowserRouter><Body/></BrowserRouter>)
    );

    const cardsBeforeSearch=screen.getAllByTestId("ResCard");
    expect(cardsBeforeSearch.length).toBe(9); //Total resCards = 9

    const searchButton=screen.getByRole("button",{name:"Search"});

    const searchInput=screen.getByTestId("SearchInput");

    fireEvent.change(searchInput,{target:{value:"spice"}}); //simulating the search feature

    fireEvent.click(searchButton); //it should show resCard(s) which match "pizza"

    const cards=screen.getAllByTestId("ResCard");
    expect(cards.length).toBe(2); 
});

it("Should test the Top Rated Restaurants Feature",async()=>{
    await act(async()=>{
        render(
            <BrowserRouter><Body/></BrowserRouter>
        )
    });
    const cardsBeforeFilter=screen.getAllByTestId("ResCard");
    expect(cardsBeforeFilter.length).toBe(9);

    const TopRatedBtn=screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(TopRatedBtn);

    const cardsAfterFilter=screen.getAllByTestId("ResCard");
    expect(cardsAfterFilter.length).toBe(3);
})