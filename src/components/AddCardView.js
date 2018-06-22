import React, { Component } from 'react';
import { Content,Container, Header, Left, Body, Right, Button, Icon, Title,Form,Item,Input,Text } from 'native-base';
import {addNewCard} from '../utilities/StorageManager'
export default class AddCardView extends Component {

    state={
        question:'',
        answer:''
    };

    onBackPressed = () =>{
        this.props.navigation.state.params.DeckDetailView.updateDashBoard();
        this.props.navigation.goBack()
    };

    onCreatePress = () =>{
        addNewCard(this.state.question,this.state.answer,this.props.navigation.state.params.id).then(() => {
            this.props.navigation.state.params.DeckDetailView.updateDashBoard();
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
                    <Title>Add new card</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content padder>
                    <Form>
                        <Item>
                            <Input placeholder="Question" onChangeText={(text) => this.setState({question:text})} />
                        </Item>
                        <Item last>
                            <Input placeholder="Answer" onChangeText={(text) => this.setState({answer:text})} />
                        </Item>
                    </Form>
                    <Button block style={{marginTop: 20}} onPress={this.onCreatePress}>
                        <Text>Create</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}