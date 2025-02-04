import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

// Action name constants
const init = 'account/init';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'account/incrementByAmount';
const incBonus = 'bonus/increment';
const getAccUserPending = 'bonus/pending';
const getAccUserFullfilled = 'bonus/fulfilled';
const getAccUserRejected = 'bonus/rejected';

// Store
const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }),
    applyMiddleware(logger.default, thunk.default)
);

const history = [];

// Reducer
function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case getAccUserFullfilled:
            return { amount: action.payload, pending:false  };
        case getAccUserRejected:
            return { ...state, error: action.error, pending:false  };
        case getAccUserPending:
            return { ...state, pending:true };
        case inc:
            return { amount: state.amount + 1 };
        case dec:
            return { amount: state.amount - 1 };
        case incByAmt:
            return { amount: state.amount + action.payload };
        default:
            return state;
    }
    // if(action.type===inc)
    // {
    //     //wrong practice
    //     // state.amount = state.amount +1
    //     //immutability
    //     return {amount:state.amount+1}
    // }
    // if(action.type===dec)
    // {
    //     return {amount:state.amount-1}
    // }
    // if(action.type===incByAmt)
    // {
    //     return {amount:state.amount+action.payload}
    // }
    // return state
}

function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points: state.points + 1 }
        // case inc:
        case incByAmt:
            if (action.payload >= 100)
                return { points: state.points + 1 }
        default:
            return state
    }
}

//global state
// console.log(store.getState());
// store.subscribe(()=>{
//     history.push(store.getState())
//     console.log(history);
// })
//action
// {type:"increment"}


//async api call
// async function getUser()
// {
//     const {data} = await axios.get("http://localhost:3000/accounts/1")
//     console.log(data);
// }
// getUser();
// Action creators
function getUser(id) {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
            dispatch(initUser(data.amount));
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
}
function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getAccountUserPending());
            const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
            dispatch(getAccountUserFullfilled(data.amount));
        } catch (error) {
            dispatch(getAccountUserRejected(error.message))
        }
    };
}

function initUser(value) {
    return { type: init, payload: value };
}
function getAccountUserFullfilled(value) {
    return { type: getAccUserFullfilled, payload: value };
}

function getAccountUserRejected(error) {
    return { type: getAccUserRejected, error: error };
}

function getAccountUserPending() {
    return { type: getAccUserPending};
}

function increment() {
    return { type: inc };
}

function decrement() {
    return { type: dec };
}

function incrementByAmount(value) {
    return { type: incByAmt, payload: value };
}

function incrementBonus() {
    return { type: incBonus };
}



// Dispatch the async action
setTimeout(() => {
    // store.dispatch(getUser(1))
    // store.dispatch(increment())
    // store.dispatch(decrement())
    // store.dispatch(incrementByAmount(200))
    // store.dispatch(incrementBonus());
    store.dispatch(getUserAccount(1));
}, 2000);


// console.log(store.getState());  //we dont to run it manulally like this instead use subscribe.