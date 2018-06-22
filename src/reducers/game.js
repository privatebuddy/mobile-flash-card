import {CREATE_INITIAL_GAME_DATA,ANSWER_QUIZ} from "../actions/game";

export default function gameData(state = {}, action) {
    switch (action.type) {
        case CREATE_INITIAL_GAME_DATA :

            let returnValue = {
                totalQuestion:action.questionNumber,
                currentQuestion: 0,
                totalCorrect:0,
                totalAnswer:0,
            };

            return{
                ...state,
                ...returnValue
            };
        case ANSWER_QUIZ :
            if(action.answer === 'correct')
            {
                state.totalCorrect += 1;
            }

            state.currentQuestion += 1;
            return{
                ...state,
            };
        default :
            return state;
    }
}