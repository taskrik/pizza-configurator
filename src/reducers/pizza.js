import {NEW_BASE, NEW_SAUSE, NEW_TOPPING, DRONE_DELIVERY } from '../actions/pizza'

const initialState = {
  base: '',
  sauses: [],
  toppings: [],
  delivery: false,
  prices: {
    baseprice: 0,
    toppingsPrices: [],
    sausesPrices: [],
    totalPrices: 0
  }
}

export default function(state = initialState, action) {
  //onst newState = {...state}
  switch(action.type) {
    case NEW_BASE:
      var sum = state.prices.sausesPrices;
      console.log(sum);
      return {
        ...state,
        base: action.payload,
        prices: {
          baseprice: parseFloat(action.payload)
        }
      }
    break;
    /*case NEW_SAUSE:
    return {
      ...state,
      sause: state.sauses.concat(action.payload),
      totalPrice:
    }

    case NEW_TOPPING:
    return {
      ...state,
      toppings: state.toppings.concat(action.payload),
      totalPrice:
    }

    case DRONE_DELIVERY:
    return {
      ...state,
      delivery: action.payload,
      totalPrice:
    }*/


    default:
      return state

  }
}
