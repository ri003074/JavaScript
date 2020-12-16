import { TYPING } from '../actions'

const initialState = {
    quizSet: ["abc", "def"],
    quizNumber: 0,
    wordLocation: 0,
}

export default (state = initialState, action) => {
    switch(action.type){
        case TYPING:
            return { wordLocation: state.wordLocation+1 }
        default:
            return state
    }
}