import { CORRECTTYPE, NEXTQUIZ, RESETQUIZ } from '../actions'

const initialState = {
    quizSet: ["abc", "def"],
    quizNumber: 0,
    wordLocation: 0,
}

export default (state = initialState, action) => {
    switch(action.type){
        case CORRECTTYPE:
            return { quizSet:state.quizSet, wordLocation:state.wordLocation+1, quizNumber:state.quizNumber }
        case NEXTQUIZ:
            return { quizSet:state.quizSet, wordLocation:0, quizNumber:state.quizNumber+1 }
        case RESETQUIZ:
            return { quizSet:state.quizSet, wordLocation:0, quizNumber:0 }
        default:
            return state
    }
}