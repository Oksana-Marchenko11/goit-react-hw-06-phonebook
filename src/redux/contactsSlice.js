import { createSlice, nanoid } from "@reduxjs/toolkit";
import { contactsInitialState } from '../data/contacts.js'
console.log(contactsInitialState);

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        number,
                        name,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1)
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;  