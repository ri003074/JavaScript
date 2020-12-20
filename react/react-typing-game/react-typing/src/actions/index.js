import axios from 'axios'
export const CORRECTTYPE = 'CORRECTTYPE'
export const NEXTQUIZ = 'NEXTQUIZ'
export const RESETQUIZ = 'RESETQUIZ'
export const INITQUIZDATA = 'INITQUIZDATA'
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

            let tmpData = []
            let contents = []
            let contentsCount = response.data.length;
            //Quiz用のデータを作成する。
            for (let i = 0; i < contentsCount; i++) {
                var content = response.data[i]
                var word_en_begin = content.word_en.slice(0, 1);

                content.word_en_begin = word_en_begin
                content.word_blank = word_en_begin + '_'.repeat(content.word_en.length - 1)
                content.phrase_quiz = content.phrase_en.replace(content.word_en, '_'.repeat(content.word_en.length)) //英語のフレーズのなかで問題となる部分をを'_'で置き換える
                content.correct_answer_rate = (content.c_counter / content.s_counter) * 100
                tmpData.push(content)
            }
            tmpData.sort(function (a, b) { //正答率が低い順番に並び替える
                return a.correct_answer_rate - b.correct_answer_rate
            })
            contents = tmpData

            dispatch(receiveMessages(contents))
        }).catch((response) => {
            console.log(response)
        })
    }
}