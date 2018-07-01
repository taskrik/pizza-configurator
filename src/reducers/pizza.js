import {
  NEW_BASE,
  NEW_SAUSE,
  NEW_TOPPING,
  REMOVE_TOPPING,
  DRONE_DELIVERY,
  NODRONE_DELIVERY
} from '../actions/pizza'
import {pizzabases, sauses, toppings} from '../shared/data'

const initialState = {
  base: {
    id: '',
    price: 0
  },
  sauses: {
    id: '',
    price: 0
  },
  toppings: [],
  delivery: false,
  totalPrice: 0
}

const totalPrice = (state) => {
  var totalPrice = 0;
  totalPrice = state.base.price + state.sauses.price;
  if (state.toppings.length > 0) {
    state.toppings.map((topping) => {
      totalPrice = totalPrice + topping.price;
    });
  }

  if (state.delivery === true)
    totalPrice = totalPrice + totalPrice * 0.1;
  return + (Math.round(totalPrice + "e+2") + "e-2")
}

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_BASE:
      state.base = {
        id: pizzabases[action.payload.id - 1].id,
        price: pizzabases[action.payload.id - 1].price
      }
      state.totalPrice = totalPrice(state);
      return {
        ...state
      };
    case NEW_SAUSE:
      state.sauses = {
        id: sauses[action.payload.id - 1].id,
        price: sauses[action.payload.id - 1].price
      }
      state.totalPrice = totalPrice(state);
      return {
        ...state
      };
    case NEW_TOPPING:
      state.toppings = [
        ...state.toppings, {
          id: toppings[action.payload.id - 1].id,
          price: toppings[action.payload.id - 1].price
        }
      ]
      state.totalPrice = totalPrice(state);
      return {
        ...state
      };
    case REMOVE_TOPPING:
      var amount = state.toppings.length;
      if (amount === 1) {
        state.toppings = [];
      } else {
        var toppingsArray = state.toppings;
        toppingsArray.map((topping, index) => {
          if (topping.id === toppings[action.payload.id - 1].id)
            state.toppings.splice(index, 1);
          }
        );
      }
      state.totalPrice = totalPrice(state);
      return {
        ...state
      }
    case DRONE_DELIVERY:
      state.delivery = action.payload.select;
      state.totalPrice = totalPrice(state);
      return {
        ...state
      }
    case NODRONE_DELIVERY:
      state.delivery = action.payload.select;
      state.totalPrice = totalPrice(state);
      return {
        ...state
      }
    default:
      return state
  }
}
