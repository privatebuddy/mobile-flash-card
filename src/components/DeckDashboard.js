import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text ,Content,List,ListItem,Card,CardItem} from 'native-base';
import {retrieveAllDecks} from '../utilities/StorageManager'
import {retrieveDecks} from "../actions/deck";
import FlashCardDetailView from "./FlashDeckDetailView";

class DeckDashboard extends Component {

    componentDidMount()
    {
        retrieveAllDecks().then(results => this.props.dispatch(retrieveDecks(results)));
    }

    componentDidUpdate()
    {

    }

    updateDashBoard = () => {
        retrieveAllDecks().then(results => this.props.dispatch(retrieveDecks(results)));
    };

    onAddButtonPressed = () =>{
        this.props.navigation.navigate('AddDeckView',{DeckDashboard:this})
    };

    onCardButtonPressed = (id) =>{
        this.props.navigation.navigate('FlashDeckDetailView',{id:id,DeckDashboard:this})
    };
    render() {
        const {DeckData} = this.props;

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
                <Content>
                    <List dataArray={DeckData}
                          renderRow={(deck) =>
                              <ListItem button onPress={()=>this.onCardButtonPressed(deck.id)}>
                                  <Card>
                                      <CardItem header>
                                          <Text>{deck.title}</Text>
                                      </CardItem>
                                      <CardItem footer>
                                          <Text>{`Amount of Cards : ${deck.questions.length}`}</Text>
                                      </CardItem>
                                  </Card>
                              </ListItem>
                          }>
                    </List>
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

export default connect(mapStateToProps)(DeckDashboard);
