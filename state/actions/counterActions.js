import { counterDispatch } from "../counterStore";

function incrementCount() {
  counterDispatch({
    type: 'INCREMENT_COUNT',
  })
}

function decrementCount() {
  counterDispatch({
    type: 'DECREMENT_COUNT',
  })
}

export {
  incrementCount,
  decrementCount,
}