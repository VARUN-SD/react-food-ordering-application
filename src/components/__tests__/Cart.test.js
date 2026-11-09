const { render } = require("@testing-library/react");
import { act, fireEvent, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MockMenu from "../mocks/resMenuData.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router";
import Header from "../Header";
import Cartpage from "../Cartpage"
global.fetch=jest.fn(()=> Promise.resolve({
        json: ()=> Promise.resolve(MockMenu)}));

it("Should simulate the cart flow when Restaurant selected and adding items to the cart",async()=>{
    await act(async()=>{
        render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header/>
            <RestaurantMenu />
            <Cartpage/>
          </Provider>
        </BrowserRouter>
        )
    })

    const accordionHeader=screen.getByText("Signature Salads (3)");
    //expect(accordionHeader).toBeInTheDocument();
    //fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    expect(screen.getByText("(0 items)")).toBeInTheDocument();

    const addToCartBtn=screen.getAllByRole("button",{name:"Add +"});
    //expect(addToCartBtn.length).toBe(3);
    fireEvent.click(addToCartBtn[0]);

    expect(screen.getByText("(1 items)")).toBeInTheDocument();

    fireEvent.click(addToCartBtn[1]);

    expect(screen.getByText("(2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    expect(screen.getByText("Your Cart looks empty !")).toBeInTheDocument();

    expect(screen.getByText("(0 items)")).toBeInTheDocument();
});