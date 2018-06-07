import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    StyleSheet,
    Image,
    FlatList,
    Animated,
    Dimensions,
    Platform
} from 'react-native';
import Header from '../components/Header';
import * as STYLES from '../styles';
import {scrape} from '../actions';
import { Tower } from '../components/Tower';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.xOffset = new Animated.Value(0);
    }

    componentDidMount() {
        this.props.scrape();
    }

    viewTranslate = () => {
        return {
            transform: [{
                translateX: this.xOffset.interpolate({
                    inputRange: [0, 100],
                    outputRange: [70, 0]
                })
            }]
        };
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
        const {width} = Dimensions.get('window');

        const onScroll = Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.xOffset } } }],
            { useNativeDriver: true }
        );
        const viewTranslate = this.viewTranslate();


        return (
            <View style={styles.containerStyle}>
                <Header
                    centerType={'text'}
                    centerText={'Home'}
                />
                <Animated.Image
                    style={[styles.bgStyle, viewTranslate]} 
                    source={require('../../assets/img/skyline.jpg')}
                />
                <AnimatedFlatList
                    style={[styles.flatListStyle, {width: width}]}
                    scrollEventThrottle={16}
                    horizontal
                    data={ campers }
                    renderItem={({item}) => <Tower title={item.key} progress={item.progress} />}
                    onScroll={onScroll}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: STYLES.CONTAINER_STYLE,
    bgStyle: {
        position: 'absolute',
        top: -300,
        left: -540,
        opacity: 0.3
    },
    flatListStyle: {
        height: '100%',
        position: 'absolute',
        top: Platform.OS === 'ios' ? 13 : 30
    }
})

const mapStateToProps = ({ auth, scrape }) => {
    const {user} = auth;
    const {fccUserStats} = scrape;
    return {user, fccUserStats};
}

export default connect(mapStateToProps, {scrape})(HomeScreen);
