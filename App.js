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
import {AppState, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
const store = createStore(reducer);

export default class App extends Component {
    constructor(props) {
        super(props);

        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            seconds: 86400,
        };
    }
    handleAppStateChange(appState) {
        if (appState === 'background') {
            let date = new Date(Date.now() + (this.state.seconds * 1000));

            PushNotification.localNotificationSchedule({
                message: "Please Play Some Card", // (required)
                date: date // in 60 secs
            });
        }
    }

    componentDidMount()
    {
        setUpInitialData();
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
        this.handleAppStateChange('background');
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
