import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/header';
import * as STYLES from '../styles';

const mapStateToProps = ({ auth }, props) => (
    { fname: auth.fname }
);

@connect(mapStateToProps)

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    centerType={'text'}
                    centerText={'Home'}
                />
                <Text>This is the home screen!</Text>
                <Text>
                {
                    this.props.fname
                }
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: STYLES.CONTAINER_STYLE
})

export default HomeScreen;