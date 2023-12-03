// client/src/store/index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Install with npm install redux-thunk
import rootReducer from '../utils/reducers'; // Adjust the path based on your project structure

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
