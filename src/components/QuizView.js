import React, { Component } from 'react';
import { DeckSwiper,Container, Header, Left, Body, Right, Button, Icon, Title,View,Card,CardItem,H1,H2,Content,Text} from 'native-base';
import {createInitialGameData} from '../actions/game'
import {answerQuiz} from '../actions/game'
import {connect} from "react-redux";
class QuizView extends Component {

    state ={
        isShowQuestion:true
    };

    componentDidMount()
    {
        const thisDeck = Object.values(this.props.DeckData).find(deck => deck.id.toString() === this.props.navigation.state.params.id.toString());
        this.props.dispatch(createInitialGameData(thisDeck.questions.length));
    }

    onBackPressed = () =>{
        this.props.navigation.state.params.DeckDetailView.updateDashBoard();
        this.props.navigation.goBack()
    };

    onCorrectPressed = () =>{
        this.props.dispatch(answerQuiz('correct'));
    };
    onInCorrectPressed = () =>{
        this.props.dispatch(answerQuiz('incorrect'));
    };
    render() {

        const {DeckData,GameData} = this.props;
        if(GameData.currentQuestion === GameData.totalQuestion){
            return (
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={this.onBackPressed}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                        <Title>Quiz time</Title>
                        </Body>
                        <Right>
                        </Right>
                    </Header>
                    <Content>
                        <H1 style={{textAlign: 'center'}}>{`Your Correct Answer : ${(GameData.totalCorrect*100)/GameData.totalQuestion} %`}</H1>
                        <H1 style={{textAlign: 'center'}}>{`Your Incorrect Answer : ${((GameData.totalQuestion-GameData.totalCorrect)*100)/GameData.totalQuestion} %`}</H1>
                        <Button onPress={()=>this.onBackPressed()} block danger style={{textAlign: 'center',marginTop:20,marginLeft:20,marginRight:20}}>
                            <Text>Finish</Text>
                        </Button>
                    </Content>
                </Container>
            );
        }else
        {
            if(GameData.currentQuestion !== undefined)
            {
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
                            <Title>Quiz time</Title>
                            </Body>
                            <Right>
                            </Right>
                        </Header>
                        <Content>
                            <Text>{`${GameData.currentQuestion+1}/${GameData.totalQuestion}`}</Text>
                            <Card>
                                <CardItem button onPress={() => this.setState({isShowQuestion:!this.state.isShowQuestion})}>
                                    <Left>
                                        <Body>
                                        <H1 style={{textAlign: 'center'}}>{
                                            this.state.isShowQuestion ?
                                                `${thisDeck.questions[GameData.currentQuestion].question}`:`${thisDeck.questions[GameData.currentQuestion].answer}`}</H1>
                                        <H2 style={{textAlign: 'center',marginTop:20, color:'#FF0000' }}>{
                                            this.state.isShowQuestion ?
                                                `Question`:`Answer`}</H2>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content>
                            <View>
                                <H1 style={{textAlign: 'center'}}>
                                    Press Card To Toggle Between Answer and Question
                                </H1>
                            </View>
                            <Button onPress={()=>this.onCorrectPressed()} block success style={{textAlign: 'center',marginTop:20,marginLeft:20,marginRight:20}}>
                                <Text>Correct</Text>
                            </Button>
                            <Button onPress={()=>this.onInCorrectPressed()} block danger style={{textAlign: 'center',marginTop:20,marginLeft:20,marginRight:20}}>
                                <Text>Incorrect</Text>
                            </Button>
                        </Content>
                    </Container>
                );
            }else
            {
                return (
                    <Container>
                        <Header>
                            <Left>
                                <Button transparent onPress={this.onBackPressed}>
                                    <Icon name='arrow-back' />
                                </Button>
                            </Left>
                            <Body>
                            <Title>Quiz time</Title>
                            </Body>
                            <Right>
                            </Right>
                        </Header>
                    </Container>
                );
            }
        }


    }
}

function mapStateToProps({gameData,deckData}) {
    return {
        DeckData:deckData,
        GameData:gameData
    }
}

export default connect(mapStateToProps)(QuizView);