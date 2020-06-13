import { combineReducers  } from 'redux';

import Courses from './courses/reducers'
const rootReducer = combineReducers({
    Courses,
})
export default rootReducer; 