import { combineReducers } from 'redux';
import deckData from './deck';
import gameData from './game';

export default combineReducers({
    gameData,
    deckData
})