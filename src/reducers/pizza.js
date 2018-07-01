import {NEW_BASE, NEW_SAUSE, NEW_TOPPING, DRONE_DELIVERY } from '../actions/pizza'

const initialState = {

  toppings: [],
  delivery: false,
    baseprice: 0,
    toppingsPrices: 0,
    sausePrice: 0,
  totalPrice: 0
}

export default function(state = initialState, action) {

  switch(action.type) {

    case NEW_BASE:
    if(state.baseprice === 0.00)
      return {
        ...state,
          baseprice: action.payload,
          totalPrice: state.totalPrice + parseFloat(action.payload)
      }
      else {
        return{
          ...state,
            baseprice: action.payload,
            totalPrice: + parseFloat(action.payload)
      }
    }

    case NEW_SAUSE:
          state.totalPrice = state.totalPrice
        return{
          ...state,
            sausePrice: action.payload,
            totalPrice: state.totalPrice + parseFloat(action.payload)
      }


    case NEW_TOPPING:
    return {
      ...state,
      toppingsPrices: state.toppingsPrices = action.payload,
      totalPrice: state.totalPrice + parseFloat(action.payload)
    }


    //
    // case DRONE_DELIVERY:
    // return {
    //   ...state,
    //   delivery: action.payload,
    //   totalPrice:
    // }


    default:
      return state

  }
}
