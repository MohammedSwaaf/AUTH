import { LOG_IN } from './action-types';
import axios from '../requests';

export const fetshStates = () => {
    return (dispatch) => {
        return axios.get(`/get-states`)
            .then(({ data }) => {
                console.log('dataofStates=>',data);

                return {
                    type: "",
                    payload: data,
                }
            })
    }
}
export const fetchAuth = (value) => {
    // console.log('action =>',value);
    // console.log(value);

    return (dispatch) => dispatch({
        type: LOG_IN,
        payload: value
    })
}