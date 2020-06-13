import { LOG_IN } from './action-types';
const initialSate = {
    isAuth: true,
}
const Courses = (state = initialSate, action) => {
    switch (action.type) {
        case LOG_IN:
            // console.log(action.payload);

            return {
                ...state,
                isAuth: action.payload
            }
        // break;

        default:
            state = { ...state }
            break;
    }
    return state
}
export default Courses