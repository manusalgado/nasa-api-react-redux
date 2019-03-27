import { actionsType } from '../actions'

const initialState = {
    astronomy: {}
}

const astronomy = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.RECEIVE_DATA:
        return {
            ...state, 
            astronomy: action.astronomy
        }            
        default:
        return state
    }
}

export { astronomy }