export const CREATE_INITIAL_GAME_DATA = 'CREATE_INITIAL_GAME_DATA';
export const ANSWER_QUIZ = 'ANSWER_QUIZ';
export function createInitialGameData(questionNumber) {
    return{
        type: CREATE_INITIAL_GAME_DATA,
        questionNumber
    }
}

export function answerQuiz(answer) {
    return{
        type: ANSWER_QUIZ,
        answer
    }
}