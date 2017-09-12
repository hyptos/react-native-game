import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import Game from './GameScreen';

let navigator;

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props);
        this.state = {
            player: '',
            error: '',
            isLoading: false,
            data : [
    {
        "id": "1",
        "image": "https://s.adopteunmec.com/fr/www/img/_common/logos/aum_256_256.jpg?d2e5c7c1dc5cf98b5e9f9ce208a8f5dc",
        "correct": 2,
        "label": "Elise et Antoine se sont rencontrés",
        "answers": [
            {
                "id": "1",
                "answer": "en primaire"
            },
            {
                "id": "2",
                "answer": "en seconde"
            },
            {
                "id": "3",
                "answer": "en terminale"
            },
            {
                "id": "4",
                "answer": "l'année dernière"
            }
        ]
    },
    {
        "id": "2",
        "image": "https://adoption.com/wp-content/uploads/2014/02/shutterstock_91351232.jpg",
        "correct": 1,
        "label": "Les mariés n’ont jamais visité ce pays ensemble",
        "answers": [
            {
                "id": "1",
                "answer": "Australie"
            },
            {
                "id": "2",
                "answer": "Espagne"
            },
            {
                "id": "3",
                "answer": "Italie"
            },
            {
                "id": "4",
                "answer": "Allemagne"
            }
        ]
    }    
]
        };
    }


    _handleChange(event) {
        this.setState({
            error: '',
            player: event.nativeEvent.text
        });
    }

    _handleSubmit() {

        this.setState({ isLoading: true });
        var player = this.state.player;
        this.setState({
            player: ''
        });

        if(! player) {
            this.setState({
                error: 'Player name is required',
                isLoading: false
            });
        } else {

            var res = this.state.data;

            this.props.navigation.navigate('Game', {                
                    player: player,
                    data: res,
                    questionsCount: res.length,
                    images_uri: 'img'
                });
            this.setState({ error: '', isLoading: false });
        }

    }

    render() {

        var showError = (
            this.state.error ? <View style={styles.errorContainer}><Text style={styles.error}>{this.state.error}</Text></View> : <View></View>
        );


        return (
            <View style={styles.container}>
                <Text style={styles.heading}>ETA</Text>
                <TextInput
                    style={styles.playerInput}
                    value={this.state.player}
                    onChange={this._handleChange.bind(this)}
                    placeholder="Type Your Name"
                    placeholderTextColor="#fff"
                    maxLength={20}
                />
                <Text style={styles.buttonText}>Start Game</Text>
                <TouchableHighlight
                    underlayColor="#ccc"
                    style={styles.button}
                    onPress={this._handleSubmit.bind(this)}>
                <Text style={styles.buttonText}>Start Game</Text>
                </TouchableHighlight>
                
                { showError }
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7d669e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 50
    },
    playerInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
        margin: 10,
        borderRadius: 10,
        width:250
        
    },
    button: {
        height: 60,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#7d669e',
        fontSize: 16
    },
    errorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        margin: 10,
        borderRadius: 10,
        height: 60,
        backgroundColor: '#e15258',
    },
    error: {
        color: '#fff',
        fontSize: 14
    }
});