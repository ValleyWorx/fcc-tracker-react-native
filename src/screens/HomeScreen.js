import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import * as STYLES from '../styles';
import {scrape} from '../actions';
import SkyScraper from '../../assets/animations/skyscraper';
import { DangerZone } from 'expo';
let { Lottie } = DangerZone;

class HomeScreen extends React.Component {
    state = {
        animation: null,
    };

    componentDidMount() {
        this.props.scrape();
        this.animation.play();
    }
    render() {
        const { challenges, algorithms, projects } = this.props.fccUserStats;

        return (
            <View style={styles.containerStyle}>
                <Header
                    centerType={'text'}
                    centerText={'Home'}
                    />
                    <Lottie
                        ref={animation => {
                            if(animation) {
                                this.animation = animation;
                            }
                        }}
                        style={styles.aniStyle}
                        speed={10}
                        loop={false}
                        source={SkyScraper}
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
    containerStyle: STYLES.CONTAINER_STYLE,
    aniStyle: {
        flex: 1,
        marginTop: 0,
        position: 'relative',
        width: 150,
        top: -30,
        left: 64,
        justifyContent: 'center'
    }
})

const mapStateToProps = ({ auth, scrape }) => {
    const {user} = auth;
    const {fccUserStats} = scrape;
    return {user, fccUserStats};
}

export default connect(mapStateToProps, {scrape})(HomeScreen);