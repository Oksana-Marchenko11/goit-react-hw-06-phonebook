import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filter: ""
}
const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState,
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

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;

