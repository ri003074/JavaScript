import { CORRECTTYPE, NEXTQUIZ, RESETQUIZ } from '../actions'

const initialState = {
    quizSet: ["abcdef", "defghi"],
    quizSetBlank: ["a_____", "d_____"],
    quizNumber: 0,
    wordLocation: 1,
}


export default (state = initialState, action) => {
    function clearQuizSetBlank() {
        state.quizSetBlank[state.quizNumber] = state.quizSet[state.quizNumber].substring(0, 1) + '_'.repeat(state.quizSet[state.quizNumber].length - 1);
    }

    switch(action.type){
        case CORRECTTYPE:
            const wordLocation = state.wordLocation+1
            state.quizSetBlank[state.quizNumber] = state.quizSet[state.quizNumber].substring(0, wordLocation) + '_'.repeat(state.quizSet[state.quizNumber].length - wordLocation);
            return { quizSet:state.quizSet, quizSetBlank:state.quizSetBlank, wordLocation:wordLocation, quizNumber:state.quizNumber }

        case NEXTQUIZ:
            clearQuizSetBlank()
            return { quizSet:state.quizSet, quizSetBlank:state.quizSetBlank, wordLocation:1, quizNumber:state.quizNumber+1 }

        case RESETQUIZ:
            clearQuizSetBlank()
            return { quizSet:state.quizSet, quizSetBlank:state.quizSetBlank, wordLocation:1, quizNumber:0 }

        default:
            return state
    }
}