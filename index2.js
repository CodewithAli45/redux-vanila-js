const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


// action type
const BUY_CAR = 'BUY_CAR';
const SELL_CAR = 'SELL_CAR';
const BUY_BIKE = 'BUY_BIKE';
const SELL_BIKE = 'SELL_BIKE';

// ACTION CREATOR
function buyCar(){
    return{
        type: 'BUY_CAR',
        info: 'buying a car'
    }
}
function sellCar(num = 2){
    return{
        type: 'SELL_CAR',
        quantity: num,
    }
}

function buyBike(){
    return{
        type: 'BUY_BIKE',
        info: 'buying a bike'
    }
}
function sellBike(num = 2){
    return{
        type: 'SELL_BIKE',
        quantity: num,
    }
}

// initial state
const initialCarState = {
    noOfCars: 25
}
const initialBikeState = {
    noOfBike : 12
}

// reducer function 
const carReducer = (state = initialCarState, action) => {
    switch(action.type){
        case BUY_CAR : 
            return {
                ...state, noOfCars: state.noOfCars - 1
            }
        case SELL_CAR :
            return {
                ...state, noOfCars: state.noOfCars + action.quantity
            }
        default :
            return state
    }
}

const bikeReducer = (state = initialBikeState, action) => {
    switch(action.type){
        case BUY_BIKE :
            return {
                ...state, noOfBike: state.noOfBike - 1
            }
        case SELL_BIKE:
            return {
                ...state, noOfBike: state.noOfBike + action.quantity
            }
        default:
            return state
            
    }
}

// store creation
const rootReducers = combineReducers({
    car: carReducer,
    bike: bikeReducer,
});

const store = createStore(rootReducers, applyMiddleware(logger));
console.log('Initial state is', store.getState());
// const unsubscribe = store.subscribe(() => {
//     console.log('Initial state is', store.getState());
// });

store.subscribe(() => {});

store.dispatch(buyCar());
store.dispatch(sellBike());
