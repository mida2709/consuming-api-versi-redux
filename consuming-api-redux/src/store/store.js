import { createStore } from 'redux';
import postReducer from './reducer';

const store = createStore(postReducer);

export default store;
