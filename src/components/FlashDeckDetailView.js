import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Content,Text,H1,H2} from 'native-base';
import {connect} from "react-redux";
import {retrieveAllDecks} from '../utilities/StorageManager'
import {retrieveDecks} from "../actions/deck";
class FlashDeckDetailView extends Component {
    onBackPressed = () =>{
        this.props.navigation.state.params.DeckDashboard.updateDashBoard();
        this.props.navigation.goBack()
    };

    onAddCardButtonPressed = () =>{
        this.props.navigation.navigate('AddCardView',{id:this.props.navigation.state.params.id,DeckDetailView:this})
    };
    onPlayQuizButtonPressed = () =>{
        this.props.navigation.navigate('QuizView',{id:this.props.navigation.state.params.id,DeckDetailView:this})
    };

    updateDashBoard = () => {
        retrieveAllDecks().then(results => this.props.dispatch(retrieveDecks(results)));
    };



    render() {

        const {DeckData} = this.props;

        const thisDeck = Object.values(DeckData).find(deck => deck.id.toString() === this.props.navigation.state.params.id.toString());
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.onBackPressed}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Card Detail</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <H1 style={{textAlign: 'center',marginTop:20}}>{thisDeck.title}</H1>
                    <H2 style={{textAlign: 'center',marginTop:20}}>{thisDeck.questions.length}</H2>
                    <Button onPress={()=>this.onAddCardButtonPressed()} block light style={{textAlign: 'center',marginTop:20,marginLeft:20,marginRight:20}}>
                        <Text>Add Card</Text>
                    </Button>
                    <Button onPress={()=>this.onPlayQuizButtonPressed()} block style={{textAlign: 'center',marginTop:20,marginLeft:20,marginRight:20}}>
                        <Text>Start Quiz</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps({deckData}) {
    return {
        DeckData:deckData
    }
}

export default connect(mapStateToProps)(FlashDeckDetailView);