export const RETRIEVE_DECKS = 'RETRIEVE_DECKS';

export function retrieveDecks(decks) {
    return{
        type: RETRIEVE_DECKS,
        decks
    }
}