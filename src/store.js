import { configureStore } from 'redux';
import chatReducer from './reducer';

const store = configureStore(chatReducer);

export default store;