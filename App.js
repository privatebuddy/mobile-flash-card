import React, { Component } from 'react';
import DeckDashboard from "./src/components/DeckDashboard";
import FlashDeckDetailView from "./src/components/FlashDeckDetailView";
import AddCardView from "./src/components/AddCardView";
import AddDeckView from "./src/components/AddDeckView";
import QuizView from "./src/components/QuizView"
import {createStackNavigator} from 'react-navigation';
import {setUpInitialData} from "./src/utilities/StorageManager";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import middleware from './src/middleware'
const store = createStore(reducer,middleware);

export default class App extends Component {

    componentDidMount()
    {
        setUpInitialData();
    }

    render() {
        return (
            <Provider store ={store}>
                <Stack/>
            </Provider>

        );
    }
}

const Stack = createStackNavigator({
        DeckDashboard: {
            screen: DeckDashboard
        },
        FlashDeckDetailView: {
            screen: FlashDeckDetailView
        },
        AddCardView: {
            screen: AddCardView
        },
        AddDeckView: {
            screen: AddDeckView
        },
        QuizView:{
            screen: QuizView
        }
    },
    {
        headerMode: 'none',
    });
