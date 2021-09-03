import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render( <CheckoutForm /> );
});

test("shows success message on submit with form details", () => {
    render( <CheckoutForm /> );

    const firstName = screen.getByLabelText( /first name:/i );
    userEvent.type( firstName, 'Brandon' );
    const firstnNameText = screen.getByText( /brandon/i )
    expect( firstnNameText ).toBeInTheDocument();

    const lastName = screen.getByLabelText( /last name:/i );
    userEvent.type( lastName, 'May' );
    const lastnNameText = screen.getByText( /may/i )
    expect( lastnNameText ).toBeInTheDocument();

    const address = screen.getByLabelText( /address:/i )
    userEvent.type( address, '1234 Sesame Street' );
    const addressText = screen.getByText( /1234 Sesame Street/i )
    expect( addressText ).toBeInTheDocument();

    const city = screen.getByLabelText( /city:/i );
    userEvent.type( city, 'Springfield' );
    const cityText = screen.getByText( /Springfield/i )
    expect( cityText ).toBeInTheDocument();

    const state = screen.getByLabelText( /state:/i );
    userEvent.type( state, 'NH' );
    const stateText = screen.getByText( /NH/i )
    expect( stateText ).toBeInTheDocument();

    const zip = screen.getByLabelText( /zip:/i );
    userEvent.type( zip, '03257' );
    const zipText = screen.getByText( /03257/i )
    expect( zipText ).toBeInTheDocument();
});
