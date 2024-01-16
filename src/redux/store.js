import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { persistedContactsReducer } from "../redux/contactsSlice";
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contactsSlice"
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'



const rootReducer = combineReducers({
    contacts: contactsReducer
})

const persistConfig = {
    key: 'contacts',
    storage,
}

export const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


export const persistor = persistStore(store);