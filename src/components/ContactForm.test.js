import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import ContactForm from "./ContactForm";

test("ContactForm adds new contact", () => {
    render(<ContactForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(firstNameInput, 
        {
            target: {
                value: "Simon",
            }
        })
    fireEvent.change(lastNameInput, 
        {
            target: {
                value: "Huang",
            }
        })
    fireEvent.change(emailInput, 
        {
            target: {
                value: "simon@test.com",
            }
        })
    fireEvent.change(messageInput, 
        {
            target: {
                value: "Hi, I'm Simon.",
            }
        })

    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    expect(screen.getByDisplayValue(/simon@test.com/i))
})