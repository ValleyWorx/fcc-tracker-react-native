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
        const { challenges, algorithms, projects } = this.props.fccUserStats;

        return (
            <View style={styles.containerStyle}>
                <Header
                    centerType={'text'}
                    centerText={'Home'}
                    />
                <Text>This is the home screen!</Text>
                <Text>
                    { `${challenges.type}  Total: ${challenges.total}  Done: ${challenges.done}` }
                </Text>
                <Text>
                    { `${algorithms.type}  Total: ${algorithms.total}  Done: ${algorithms.done}` }
                </Text>
                <Text>
                    { `${projects.type}  Total: ${projects.total}  Done: ${projects.done}` } 
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: STYLES.CONTAINER_STYLE
})

const mapStateToProps = ({ auth, scrape }) => {
    const {user} = auth;
    const {fccUserStats} = scrape;
    return {user, fccUserStats};
}

export default connect(mapStateToProps, {scrape})(HomeScreen);