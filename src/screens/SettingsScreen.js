import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as STYLES from '../styles';

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is the settings screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: STYLES.CONTAINER_STYLE,
})

export default SettingsScreen;