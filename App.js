import React, { Component } from 'react';
import DeckDashboard from "./Components/DeckDashboard";
import FlashCardDetailView from "./Components/FlashCardDetailView";
import AddCardView from "./Components/AddCardView";
import {createStackNavigator} from 'react-navigation';
export default class App extends Component {
  render() {
    return (
        <Stack/>
    );
  }
}

const Stack = createStackNavigator({
        DeckDashboard: {
            screen: DeckDashboard
        },
        FlashCardDetailView: {
            screen: FlashCardDetailView
        },
        AddCardView: {
            screen: AddCardView
        }
    },
    {
        headerMode: 'none',
    });
