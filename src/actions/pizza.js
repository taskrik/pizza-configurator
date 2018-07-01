export const NEW_BASE = 'NEW_BASE'
export const NEW_SAUSE = 'NEW_SAUSE'
export const NEW_TOPPING = 'NEW_TOPPING'
export const REMOVE_TOPPING = 'REMOVE_TOPPING'
export const DRONE_DELIVERY = 'DRONE_DELIVERY'
export const NODRONE_DELIVERY = 'NODRONE_DELIVERY'

export function selectBase(base) {
  return {
    type: NEW_BASE,
    payload: {
      id: base
    }
  }
}

export function newSause(sause) {
  return {
    type: NEW_SAUSE,
    payload: {
      id: sause
    }
  }
}

export function newTopping(topping) {
  return {
    type: NEW_TOPPING,
    payload: {
      id: topping
    }
  }
}

export function removeTopping(topping) {
  return {
    type: REMOVE_TOPPING,
    payload: {
      id: topping
    }
  }
}

export function droneDelivery(delivery) {
  return {
    type: DRONE_DELIVERY,
    payload: {
      select: delivery
    }
  }
}

export function notDroneDelivery(nodronedelivery) {
  return {
    type: NODRONE_DELIVERY,
    payload: {
      select: nodronedelivery
    }
  }
}
