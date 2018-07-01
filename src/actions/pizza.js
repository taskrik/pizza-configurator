export const NEW_BASE = 'NEW_BASE'
export const NEW_SAUSE = 'NEW_SAUSE'
export const NEW_TOPPING = 'NEW_TOPPING'
export const REMOVE_TOPPING = 'REMOVE_TOPPING'
export const DRONE_DELIVERY = 'DRONE_DELIVERY'
export const NODRONE_DELIVERY = 'NODRONE_DELIVERY'

export function selectBase(base) {
  return {
    type: NEW_BASE,
    payload: base
  }
}
