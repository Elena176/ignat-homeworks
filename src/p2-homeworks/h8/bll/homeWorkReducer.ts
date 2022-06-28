import {UserType} from '../HW8';

const SORT = 'SORT';
const CHECK = 'CHECK';

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
  switch (action.type) {
    case SORT: {
      // need to fix
      if (action.payload === 'up') {
        return [...state.sort((a, b) => a.name < b.name ? -1 : 1)]
      }
      if (action.payload === 'down') {
        return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
      } else {
        return state
      }
    }
    case CHECK: {
      // need to fix
      return [...state.filter((s) => s.age > action.payload)]
    }
    default:
      return state
  }
}

export const isSortedUp = () => ({type: SORT, payload: 'up'} as const)
export const isSortedDown = () => ({type: SORT, payload: 'down'} as const)
export const isSortedCheck = () => ({type: CHECK, payload: 18} as const)
type isSortedType = ReturnType<typeof isSortedUp>
  | ReturnType<typeof isSortedDown>
| ReturnType<typeof isSortedCheck>

type ActionsType = isSortedType