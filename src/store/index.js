import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';



import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

// console.log(store.getStore())

export default store;