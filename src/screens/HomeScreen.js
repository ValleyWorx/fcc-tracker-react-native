import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import Header from '../components/Header';
import * as STYLES from '../styles';
import {scrape} from '../actions';
import { Tower } from '../components/Tower';

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

                <ScrollView
                    horizontal={true}
                    snapToAlignment={'center'}
                    snapToInterval={150}
                    decelerationRate={'fast'}
                >
                    <Image
                      style={styles.bgStyle} 
                      source={require('../../assets/img/skyline.jpg')}
                    />
                    <Tower progress={.25} title={'Tower 1'}/>
                    <Tower progress={0.5} title={'Tower 2'}/>
                    <Tower progress={.75} title={'Tower 3'}/>
                    <Tower progress={1} title={'Tower 4'}/>
                    <Tower progress={0.40} title={'Tower 5'}/>
                    <Tower progress={0.5}  title={'Tower 6'}/>
                    <Tower progress={1} title={'Tower 7'}/>
                    <Tower progress={0.5} title={'Tower 8'}/>
                </ScrollView>

                {/* <Text>This is the home screen!</Text>
                <Text>
                    { `${challenges.type}  Total: ${challenges.total}  Done: ${challenges.done}` }
                </Text>
                <Text>
                    { `${algorithms.type}  Total: ${algorithms.total}  Done: ${algorithms.done}` }
                </Text>
                <Text>
                    { `${projects.type}  Total: ${projects.total}  Done: ${projects.done}` } 
                </Text> */}
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
    },
    bgStyle: {
        position: 'absolute',
        top: -312,
        left: -150,
        opacity: 0.3
    }
})

const mapStateToProps = ({ auth, scrape }) => {
    const {user} = auth;
    const {fccUserStats} = scrape;
    return {user, fccUserStats};
}

export default connect(mapStateToProps, {scrape})(HomeScreen);