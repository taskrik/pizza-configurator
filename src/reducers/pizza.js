import {NEW_BASE, NEW_SAUSE, NEW_TOPPING, DRONE_DELIVERY } from '../actions/pizza'

const initialState = {

  toppings: [],
  delivery: false,
  prices: {
    baseprice: 0,
    toppingsPrices: [],
    sausePrice: 0
  },
  totalPrice: 0
}

export default function(state = initialState, action) {
  //onst newState = {...state}
  switch(action.type) {
    case NEW_BASE:


      return {
        ...state,
        base: action.payload,
        prices: {
          baseprice: parseFloat(action.payload)
        }

      }

    case NEW_SAUSE:

    return {
      ...state,
      sausePrice: parseFloat(action.payload),

    }


    // case NEW_TOPPING:
    // return {
    //   ...state,
    //   toppings: state.toppings.concat(action.payload),
    //   totalPrice:
    // }
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
