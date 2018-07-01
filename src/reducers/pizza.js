import {
  NEW_BASE,
  NEW_SAUSE,
  NEW_TOPPING,
  REMOVE_TOPPING,
  DRONE_DELIVERY,
  NODRONE_DELIVERY
} from '../actions/pizza'
import { pizzabases, sauses, toppings } from '../shared/data'

const initialState = {
  base: {
    id: '',
    price: ''
  },
  sauses: {
    id: '',
    price: ''
  },
  toppings: [],
  delivery: false,
  totalPrice: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_BASE:
      var price = state.totalPrice + pizzabases[action.payload.id - 1].price;
      if (state.base.price !== '') {
        price = state.totalPrice - state.base.price + pizzabases[action.payload.id - 1].price;
      }
      return {
        ...state,
        base: {
          id: pizzabases[action.payload.id - 1].id,
          price: pizzabases[action.payload.id - 1].price
        },
        totalPrice: +(Math.round(price + "e+2") + "e-2")
      }
    case NEW_SAUSE:
      var price = state.totalPrice + sauses[action.payload.id - 1].price;
      if (state.sauses.price !== '') {
        price = parseFloat(state.totalPrice - state.sauses.price + sauses[action.payload.id - 1].price);
      }
      return {
        ...state,
        sauses: {
          id: sauses[action.payload.id - 1].id,
          price: sauses[action.payload.id - 1].price
        },
        totalPrice: +(Math.round(price + "e+2") + "e-2")
      }
    case NEW_TOPPING:
      var price = state.totalPrice + toppings[action.payload.id - 1].price;
      return {
        ...state,
        toppings: [...state.toppings, {
          id: toppings[action.payload.id - 1].id,
          price: toppings[action.payload.id - 1].price
        }],
        totalPrice: +(Math.round(price + "e+2") + "e-2")
      }
    case REMOVE_TOPPING:
      var amount = state.toppings.length;
      if (amount === 1) {
        state.toppings = [];
      } else {
        var toppingsArray = state.toppings;
        for (var i = 0; i < amount; i++) {
          if (toppingsArray[i].id === action.payload.id - 1) {
            state.toppings.splice(i, 1);
            break;
          }
        }
      }
      var price = state.totalPrice - toppings[action.payload.id - 1].price;
      return {
        ...state,
        totalPrice: +(Math.round(price + "e+2") + "e-2")
      }
    case DRONE_DELIVERY:
      var price = state.totalPrice + state.totalPrice * 0.10;
      return {
        ...state,
        totalPrice: +(Math.round(price + "e+2") + "e-2")
      }
    case NODRONE_DELIVERY:
      var price = state.totalPrice * 100 / 110;
      return {
        ...state,
        totalPrice: +(Math.round(price + "e+2") + "e-2")
      }
    default:
      return state
  }
}
