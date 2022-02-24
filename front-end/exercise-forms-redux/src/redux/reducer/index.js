import { combineReducers } from 'redux';
import personalReducer from './personal';
import professionalReducer from './professional';

const rootReducer = combineReducers({ professionalReducer, personalReducer });

export default rootReducer;
