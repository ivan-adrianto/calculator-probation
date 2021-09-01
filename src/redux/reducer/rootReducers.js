import types from '../action/types'

const initialState = {
  histories: []
}

const rootReducer = (state = initialState, action) => {
  if(action.type === types.SAVE_CALC){
    return {
      ...state,
      histories: state.histories.length === 7 ? [...state.histories, action.payload].slice(1,8) : [...state.histories, action.payload]
    }
  }
  if (action.type === types.VIEW_CALC) {
    return {
      ...state,
    }
  } else {
    return {
      ...state
    }
  }
}

export default rootReducer