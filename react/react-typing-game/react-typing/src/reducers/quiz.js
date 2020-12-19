import { CORRECTTYPE, NEXTQUIZ, RESETQUIZ, INITQUIZDATA } from '../actions'

console.log("before initstate")
const initialState = {
    quizSet: ["abcdef", "defghi"],
    quizSetBlank: ["a_____", "d_____"],
    quizNumber: 0,
    wordLocation: 1,
    messages:[],
    isFetching:false,
}


export default (state = initialState, action) => {
    console.log("state")
    function clearQuizSetBlank() {
        state.quizSetBlank[state.quizNumber] = state.quizSet[state.quizNumber].substring(0, 1) + '_'.repeat(state.quizSet[state.quizNumber].length - 1);
    }

    switch(action.type){
        case CORRECTTYPE:
            // console.log(state)
            const wordLocation = state.wordLocation+1
            state.quizSetBlank[state.quizNumber] = state.quizSet[state.quizNumber].substring(0, wordLocation) + '_'.repeat(state.quizSet[state.quizNumber].length - wordLocation);
            return { quizSet:state.quizSet, quizSetBlank:state.quizSetBlank, wordLocation:wordLocation, quizNumber:state.quizNumber, messages:state.messages}

        case NEXTQUIZ:
            clearQuizSetBlank()
            const quizNumber = Math.floor(Math.random() * state.quizSet.length)
            return { quizSet:state.quizSet, quizSetBlank:state.quizSetBlank, wordLocation:1, quizNumber:quizNumber, messages:state.messages }

        case RESETQUIZ:
            clearQuizSetBlank()
            return { quizSet:state.quizSet, quizSetBlank:state.quizSetBlank, wordLocation:1, quizNumber:0, messages:state.messages}
        
        case INITQUIZDATA:
            console.log("init")
            // console.log(action)
            return { quizSet:state.quizSet, quizSetBlank:state.quizSetBlank, wordLocation:1, quizNumber:0 }

        case 'FETCH_MESSAGES':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'FETCH_MESSAGES_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                messages: action.messages
            });

        case 'ADD_MESSAGE':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'ADD_MESSAGE_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
            });
        

        default:
            return state
    }
}