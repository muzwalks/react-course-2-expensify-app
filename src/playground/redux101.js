import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count }) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
});

//setup default state value (pass in function as first argument)
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

//action - an object that gets sent to the store eg. increment, decrement, reset
const subscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//   type: "INCREMENT"
// });

// store.dispatch({
//   type: "RESET"
// });

store.dispatch(setCount({ count: 500 }));

//dispatch action to store and notify to increment
store.dispatch(decrementCount({ decrementBy: 7 }));

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 20
// });

// store.dispatch({
//   type: "SET",
//   count: 101
// });

store.dispatch(resetCount());
