import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import * as STYLES from '../styles';
import {scrape} from '../actions';

class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.scrape();
    }
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

const mapStateToProps = state => {
    const {user} = state.auth;
    return {user};
}

export default connect(mapStateToProps, {scrape})(HomeScreen);