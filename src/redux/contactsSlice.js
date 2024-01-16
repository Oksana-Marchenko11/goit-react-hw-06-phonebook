import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const initialState = {
    contacts: [{ id: "1", name: "Oksi", number: "111-111-11" }],
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
// const persistConfig = {
//     key: 'contacts',
//     storage,
// }

export const contactsReducer = contactsSlice.reducer;
// export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer)

export const { addContact, deleteContact } = contactsSlice.actions;

