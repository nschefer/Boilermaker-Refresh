//initial state
const initialState = {
  counter: 0
};

//actions
const ADD_ONE = 'ADD_ONE';
const SUBTRACT_ONE = 'SUBTRACT_ONE';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';

//action creators
export const increment = () => ({
  type: ADD_ONE
})

export const decrement = () => ({
  type: SUBTRACT_ONE
})

export const multiply = num => ({
  type: MULTIPLY,
  num
})

export const divide = num => ({
  type: DIVIDE,
  num
})

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        counter: state.counter + 1
      }
    case SUBTRACT_ONE:
      return {
        ...state,
        counter: state.counter - 1
      }
    case MULTIPLY:
      return {
        ...state,
        counter: state.counter * action.num
      }
    case DIVIDE:
      return {
        ...state,
        counter: state.counter / action.num
      }
    default:
      return state
  }
}
