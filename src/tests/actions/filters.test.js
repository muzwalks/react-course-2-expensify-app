import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter
} from "../../actions/filters";
import moment from "moment";

test("should generate sortByDate action object", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should generate sortByAmount action object", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should generate setTextFilter action with default object", () => {
  const action = setTextFilter("");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should generate setTextFilter action with text object", () => {
  const action = setTextFilter("something");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "something"
  });
});

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});
