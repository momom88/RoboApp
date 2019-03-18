import {
        CHANGE_SEARCH_FIEALD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCES,
        REQUEST_ROBOTS_FAILED,
} from './constants.js';

export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIEALD,
        payload: text
})

export const requestRobots = () => (dispatch) => {
        dispatch({ type: REQUEST_ROBOTS_PENDING });
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCES, payload: data }))
                .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })) 
}