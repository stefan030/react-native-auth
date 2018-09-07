import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>{this.props.headerText}</Text>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 5,
        elevation: 6,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

export { Header };


// Make the component available to other parts of the app 'export default { Header: Header}, shorthand is written below'
