export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'
export const SHOW = 'counter/SHOW'
export const HIDE = 'counter/HIDE'

const initialState = {
  count: 0,
  relatedQ: "",
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }

    case SHOW:
      return {
        ...state,
        relatedQ: "This is your related question"
      }

    case HIDE:
      return {
        ...state,
        relatedQ: ""
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {

    dispatch({
      type: INCREMENT
    })
  }
}


export const decrement = () => {
  return dispatch => {

    dispatch({
      type: DECREMENT
    })
  }
}


export const showQuestion = () => {
  return dispatch => {
    dispatch({
      type: SHOW
    })
  }
}

export const hideQuestion = () => {
  return dispatch => {
    dispatch({
      type: HIDE
    })
  }
}
