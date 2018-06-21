import React, { Component } from 'react';
import { Content,Container, Header, Left, Body, Right, Button, Icon, Title,Form,Item,Input,Text } from 'native-base';

export default class AddCardView extends Component {

    onBackPressed = () =>{
        this.props.navigation.goBack()
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
                            <Input placeholder="Deck name" />
                        </Item>
                    </Form>
                    <Button block style={{marginTop: 20}}>
                        <Text>Add</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}