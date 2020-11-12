import axios from 'axios';

const api = ({dispatch}) => next => async action => {
    console.log("API-MW")
    return next(action);
};
export default api;