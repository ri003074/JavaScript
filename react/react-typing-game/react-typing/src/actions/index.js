import axios from 'axios'
export const CORRECTTYPE     = 'CORRECTTYPE'
export const NEXTQUIZ        = 'NEXTQUIZ'
export const RESETQUIZ       = 'RESETQUIZ'
export const INITQUIZDATA    = 'INITQUIZDATA'
export const FETCH_MESSAGES = 'FETCH_MESSAGES'
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'

export const correctType = () => ({
    type: CORRECTTYPE
})

export const nextQuiz = () => ({
    type: NEXTQUIZ
})

export const resetQuiz = () => ({
    type: RESETQUIZ
})

export const initQuizData = () => ({
    type: INITQUIZDATA
})

function requestMessages() {
    return {
        type: FETCH_MESSAGES
    }
}

function receiveMessages(json) {
    return {
        type: FETCH_MESSAGES_SUCCESS,
        messages: json
    }
}

export function fetchMessages() {
    return dispatch => {
        dispatch(requestMessages())
        return axios.get('http://localhost:8000/api/').then((response) => {
            dispatch(receiveMessages(response.data))
            // console.log(response.data)
        }).catch((response) => {
            // console.log(response)
        })
    }
}