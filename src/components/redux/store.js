import {createStore, applyMiddleware, compose} from "redux"
import { combineReducers } from "redux";
// import thunkMiddleware from "redux-thunk";
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
}); // можно записывать без повторов
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(
//     applyMiddleware(thunkMiddleware)
//   ));
let store = createStore(reducers);

window.__store__ = store;

export default store;
