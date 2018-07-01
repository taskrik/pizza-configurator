export const NEW_BASE = 'NEW_BASE'
export const NEW_SAUSE = 'NEW_SAUSE'
export const NEW_TOPPING = 'NEW_TOPPING'
export const DRONE_DELIVERY = 'DRONE_DELIVERY'


export function selectBase(base) {

  return {

    type: NEW_BASE,
    payload: base

     }
  }


export function selectSause(sause) {

  return {

    type: NEW_SAUSE,
    payload: sause
     }
  }

//
// export function selectToppings(word , guesses) {
//   const newWord = randomWord()
//   return {
//
//     type: NEW_TOPPING,
//     payload: {
//       word: newWord ,
//        guesses: []
//      }
//   }
// }
//
// export function selectDelivery(word , guesses) {
//   const newWord = randomWord()
//   return {
//
//     type: DRONE_DELIVERY,
//     payload: {
//       word: newWord ,
//        guesses: []
//      }
//   }
// }
