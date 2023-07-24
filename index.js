const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios')
const reduxLogger = require('redux-logger');
const { default: thunk } = require('redux-thunk');
const logger = reduxLogger.createLogger();

const reduxThunk = require('redux-thunk');
const thunkMiddleware = reduxThunk.default;

// action type
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SECCESS';
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

function fetchUserRequest(){
    return {
        type:'FETCH_USER_REQUEST',
    }
}
function fetchUserSuccess(users){
    return {
        type: 'FETCH_USER_SECCESS',
        payload: users,
    }
}

function fetchUserFailure(error){
    return {
        type: 'FETCH_USER_ERROR',
        payload:error
    }
}

const fetchUser =  () => {
    return async function(dispatch){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const users = response.data[0];
            if(!users){
                dispatch(fetchUserRequest());
            }
            dispatch(fetchUserSuccess(users));
        } catch (error) {
            dispatch(fetchUserFailure(error.message));
        }
    }
}

// reducer
const initialState = {
    loading: false,
    user: [],
    error: ''
}
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state, loading:true
            };
        case FETCH_USER_SUCCESS:
            return{
                loading:false, user:action.payload, error: ''
            };
        case FETCH_USER_ERROR:
            return{
                loading:false, user:[], error: action.payload
            }
        default:
            return state
    }
}

const store = createStore(userReducer, applyMiddleware(thunkMiddleware, logger));

// store.subscribe(() => {
    // console.log('initial state -> ', store.getState());
// })

store.subscribe(() => {});
store.dispatch(fetchUser());
