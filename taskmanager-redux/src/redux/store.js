import { compose, createStore } from "redux";
import rootReducer from './reducers'; // index.js

// all actions going to store, redux dev tools middlware intercepts
// useful for  debuging
const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;