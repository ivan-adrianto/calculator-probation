import types from './types'

export const saveCalculation = (payload) => {
  return { type: types.SAVE_CALC, payload}
}

export const viewCalculation = (payload) => {
  return {type: types.VIEW_CALC, payload}
}