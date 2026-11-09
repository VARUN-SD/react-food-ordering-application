import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";



it("should render Header Component and test what are all working",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    //Finding Button
    //const button=screen.getByRole("button") OR
    const button=screen.getByRole("button",{name:"Login"}); //specific using button name
    expect(button).toBeInTheDocument();

    //FireEvent to test the on click button
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();

    //Testing the cart items
    const cartItems=screen.getByText(/items/);
    expect(cartItems).toBeInTheDocument();
});