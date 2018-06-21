import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class DeckDashboard extends Component {

    onAddButtonPressed = () =>{
        this.props.navigation.navigate('AddCardView')
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                    </Left>
                    <Body>
                    <Title>Decks</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.onAddButtonPressed}>
                            <Icon name='add' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}