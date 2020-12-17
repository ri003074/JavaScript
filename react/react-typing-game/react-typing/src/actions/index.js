export const CORRECTTYPE = 'CORRECTTYPE'
export const NEXTQUIZ    = 'NEXTQUIZ'
export const RESETQUIZ   = 'RESETQUIZ'

export const correctType = () => ({
    type: CORRECTTYPE
})

export const nextQuiz = () => ({
    type: NEXTQUIZ
})

export const resetQuiz = () => ({
    type: RESETQUIZ
})