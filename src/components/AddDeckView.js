import React, { Component } from 'react';
import { Content,Container, Header, Left, Body, Right, Button, Icon, Title,Form,Item,Input,Text } from 'native-base';
import {addNewDeck} from '../utilities/StorageManager'
export default class AddDeckView extends Component {

    state={
        deckName:'New Name'
    };

    onBackPressed = () =>{
        this.props.navigation.state.params.DeckDashboard.updateDashBoard();
        this.props.navigation.goBack()
    };

    onCreatePress = () =>{
        addNewDeck(this.state.deckName).then(() => {
            this.props.navigation.state.params.DeckDashboard.updateDashBoard();
            this.props.navigation.goBack()
        });


    };



    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.onBackPressed}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Add new deck</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content padder>
                    <Form>
                        <Item last>
                            <Input placeholder="Deck name" onChangeText={(text) => this.setState({deckName:text})} />
                        </Item>
                    </Form>
                    <Button block style={{marginTop: 20}} onPress={this.onCreatePress}>
                        <Text>Add</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}