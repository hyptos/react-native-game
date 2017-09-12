import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';


import End from './EndScreen';

import {
  StackNavigator,
} from 'react-navigation';
 // 1.0.0-beta.11

export default class GameScreen extends React.Component {

  static navigationOptions = {
    title: 'Game'
  };
  
    constructor(props){
        super(props);
        const { params } = this.props.navigation.state;
        this.props.data = params.data;
        this.props.player = params.player;
        this.state = {
            start: 0,
            score: 0,
            data: params.data,
            player: params.player,
            images_uri: params.images_uri,
            questionsCount: params.questionsCount
        }        
        
    }


    _reset() {
        this.setState({
            start: 0,
            score: 0
        });
    }

    _btnStyle(btn) {
        var style = {
            justifyContent: 'center',
            flex: 1,
        };

        if(btn === 0) {
            style.backgroundColor = '#4daf51';
        } else if(btn === 1) {
            style.backgroundColor = '#f9845b';
        } else if(btn === 2) {
            style.backgroundColor = '#9e4d83';
        } else if(btn === 3) {
            style.backgroundColor = '#f9a11f';
        } else {
            style.backgroundColor = '#3079ab';
        }

        return style;
    }

    _handleAnswer(answer) {

        // Bonne reponse
        if(this.state.data[this.state.start].correct == answer) {
            this.setState({
                score: this.state.score + 1
            });
        }
      
        // Fin du questionnaire
        if(this.state.questionsCount === this.state.start + 1) {            
            this.props.navigation.navigate('End', {
                    score: this.state.score,
                    questionsCount: this.state.questionsCount,
                    player: this.state.player
                }
            );
        }

        this.setState({
            start: this.state.start + 1
        });
    }

    render() {

        if(this.state.questionsCount >= this.state.start + 1) {

            var answers = this.state.data[this.state.start].answers.map((answer, index) => {

                return (                    
                    <TouchableHighlight
                        key={index}
                        style={this._btnStyle(index + 1)}
                        onPress={this._handleAnswer.bind(this, answer.id)}
                        underlayColor="#333"
                    >
                    <Text style={styles.buttonText}>{answer.answer}</Text>
                    </TouchableHighlight>
                )
            });

            return (
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{uri: this.state.data[this.state.start].image}}
                    />
                    <TouchableHighlight
                        key='label'
                        style={this._btnStyle(0)}
                        underlayColor="#444"
                    >                    
                    <Text style={styles.question}>{this.state.data[this.state.start].label}</Text>
                    </TouchableHighlight>
                    { answers }
                </View>
            );
        } else {

         return ( <View style={styles.container}></View>);
        }
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 250
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 16
    },
    question: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 20
    }
});