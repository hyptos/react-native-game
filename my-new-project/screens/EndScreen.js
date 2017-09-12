import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    Button
} from 'react-native';


export default class EndScreen extends React.Component {


    static navigationOptions = {
        title: 'End',
        headerLeft: null,
        left: null
    };

    constructor(props) {
        super(props);
    }


    render() {

        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>GG WP</Text>     
                <Text style={styles.text}>
                    {params.player}! Ton score est de {params.score} / {params.questionsCount}
                </Text>     
                <Button
                    onPress={onPressLearnMore}
                    title="Quitter l'application"
                    color="#841584"
                    accessibilityLabel="Quitter l'application"
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5cb860',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 50
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 50
    }
});
