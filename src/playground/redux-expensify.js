import { createStore, combineReducers } from "redux";
import uuid from "uuid";









store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 5 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 400, createdAt: -2000 })
);

// const expenseThree = store.dispatch(
//   addExpense({ description: "Studies", amount: 200, createdAt: -3000 })
// );

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 800 }));

// store.dispatch(setTextFilter("ff"));
// store.dispatch(sortByDate());
//store.dispatch(sortByAmount());

// store.dispatch(setStartDate(0));
//store.dispatch(setStartDate(-2500));
// store.dispatch(setEndDate(4));

const demoState = {
  expenses: [
    {
      id: "alsdfjasldfj",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
