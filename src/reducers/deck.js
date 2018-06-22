import {RETRIEVE_DECKS} from "../actions/deck";

export default function deckData(state = {}, action) {
    switch (action.type) {
        case RETRIEVE_DECKS :

            let questions = [];
            action.decks.map((result, i, store) => {
                // get at each store's key/value so you can work with it
                let key = store[i][0];
                let value = store[i][1];

                questions.push({id:key,...JSON.parse(value)});
            });

            console.log({...questions});
            return{
                ...state,
                ...questions
            };
        default :
            return state;
    }
}