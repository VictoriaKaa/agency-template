import { createStore } from "redux"
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import aboutReducer from "./about-reducer";
import galleryReducer from "./gallery-reducer";
import servicesReducer from "./services-reducer";
import articlesReducer from "./articles-reducer";
import contactsReducer from "./contacts-reducer";

let reducers = combineReducers({
    form: formReducer,
    aboutPage: aboutReducer,
    galleryPage: galleryReducer,
    servicesPage: servicesReducer,
    articlesPage: articlesReducer,
    contactsPage: contactsReducer
}); 
let store = createStore(reducers);


export default store;
