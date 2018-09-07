import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from './components/common/';


class App extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Header headerText="Authentication" />
                <Text>An app</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;