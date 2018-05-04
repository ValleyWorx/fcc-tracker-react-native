import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import * as STYLES from '../styles';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    centerType={'text'}
                    centerText={'Home'}
                />
                <Text>This is the home screen!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: STYLES.CONTAINER_STYLE
})

export default HomeScreen;