import { combineReducers } from 'redux';
import counterReducer from './counter_reducer';

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;