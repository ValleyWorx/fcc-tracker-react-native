import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Animated,
    FlatList,
    Dimensions
} from 'react-native';
import Header from '../components/Header';
import * as STYLES from '../styles';
import {scrape} from '../actions';
import { Tower } from '../components/Tower';

class HomeScreen extends React.Component {
    state = {
        bgLeft: -480
    }

    componentDidMount() {
        this.props.scrape();
    }

    render() {
        const { challenges, algorithms, projects } = this.props.fccUserStats;

        // TEST DATA
        const campers = [
            { key: "Camper 1", progress: 0.25 },
            { key: "Camper 2", progress: 0.50 },
            { key: "Camper 3", progress: 0.75 },
            { key: "Camper 4", progress: 1.00 },
            { key: "Camper 5", progress: 0.25 },
            { key: "Camper 6", progress: 0.50 },
            { key: "Camper 7", progress: 0.75 },
            { key: "Camper 8", progress: 1.00 },
        ];
        const {height, width} = Dimensions.get('window');

        const onScroll = Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.state.bgleft } } }],
            { useNativeDriver: true }

            // var scrollX = ((e.nativeEvent.contentOffset.x) * -0.7);
            // this.setState({bgLeft: scrollX - 480});
      
        );

        viewTranslate() {
            return {
              transform: [{
                translateY: this.state.bgleft.interpolate({
                  inputRange: [0,100],
                  outputRange: [70,0]
                })
              }]
            };
          }

        return (
            <View style={styles.containerStyle}>
                <Header
                    centerType={'text'}
                    centerText={'Home'}
                    />

                <Animated.ScrollView
                    scrollEventThrottle={16}
                    horizontal={true}
                    snapToAlignment={'center'}
                    snapToInterval={150}
                    decelerationRate={'fast'}
                    scrollEnabled={false}
                >
                    <Image
                    style={[styles.bgStyle, {this.viewTranslate}]} 
                    source={require('../../assets/img/skyline.jpg')}
                    />
                <Animated.FlatList
                        style={[styles.flatListStyle, {width: width}]}
                        scrollEventThrottle={16}
                        horizontal
                        data={ campers }
                        renderItem={({item}) => <Tower title={item.key} progress={item.progress} />}
                        onScroll={onScroll}
                />
                </Animated.ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: STYLES.CONTAINER_STYLE,
    // aniStyle: {
    //     flex: 1,
    //     marginTop: 0,
    //     position: 'relative',
    //     width: 150,
    //     top: -30,
    //     left: 64,
    //     justifyContent: 'center'
    // },
    bgStyle: {
        position: 'absolute',
        top: -350,
        // left: -150,
        opacity: 0.3
    },
    flatListStyle: {
        //flex: 1,
        height: '100%',
        position: 'absolute',
        top: -38
    }
})

const mapStateToProps = ({ auth, scrape }) => {
    const {user} = auth;
    const {fccUserStats} = scrape;
    return {user, fccUserStats};
}

export default connect(mapStateToProps, {scrape})(HomeScreen);
