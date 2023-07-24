// state management tool
/* 
1. Store -> javascript object to store the state of entire application
2. Action -> javascript object to trigger event and provide ways to change the state 
3. Reducer -> a js function changes the state by taking action as an input
*/

const redux = require('redux');
const createStore = redux.createStore;

// action type
const BUY_CAR = 'BUY_CAR';
const SELL_CAR = 'SELL_CAR';
const BUY_BIKE = 'BUY_BIKE';
const SELL_BIKE = 'SELL_BIKE';


// action creation
function buyCar(){
    return {
        type: 'BUY_CAR',
        info: 'buying a car'
    }
}

function sellCar(num = 2){
    return {
        type: 'SELL_CAR',
        quantity: num,
    }
}
function buyBike(){
    return {
        type: 'BUY_BIKE',
        info: 'buying bike'
    }
}
function sellBike(num = 2){
    return {
        type: 'SELL_BIKE',
        quantity: num,
    }
}

// initial state
const initialState = {
    noOfCars : 10,
    noOfBike: 20
}
// reducer

const carReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAR :
            return {
                ...state, noOfCars: state.noOfCars - 1,
            }
        case SELL_CAR:
            return {
                ...state, noOfCars: state.noOfCars + action.quantity,
            }
        case BUY_BIKE:
            return {
                ...state, noOfBike: state.noOfBike - 1
            }
        case SELL_BIKE:
            return{
                ...state, noOfBike: state.noOfBike + action.quantity
            }
        default:
            return state;
    }
}

// creating the store

const store = createStore(carReducer);
// console.log(store);
// store.dispatch(buyCar());
console.log('initial state -> ', store.getState());

// subscribe to get notified every time the state changes

store.subscribe(() => console.log(
    'The store is updated to -> ', store.getState()
));

store.dispatch(buyCar());
store.dispatch(sellCar(6));

store.dispatch(buyBike());


