import { TYPING } from '../actions'

const initialState = {
    quizSet: ["abc", "def"],
    quizNumber: 0,
    wordLocation: 0,
}

export default (state = initialState, action) => {
    console.log("inside  quiz.js")
    switch(action.type){
        case TYPING:
            return { quizSet:state.quizSet, wordLocation: state.wordLocation+1 , quizNumber:0 }
        default:
            return state
    }
}