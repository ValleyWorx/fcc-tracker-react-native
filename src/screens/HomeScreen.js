import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    StyleSheet,
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

const IS_ANDROID = Platform.OS === 'android';

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
        const { challenges, projects } = this.props.fccUserStats;

        // TEST DATA
        const certifications = [
            { key: "Responsive\nWeb Design", progress: 0.25 },
            { key: "Javascript\nAlgorithms and\nData Structures", progress: 0.50 },
            { key: "Front End\nLibraries", progress: 0.75 },
            { key: "Data\nVisualization", progress: 1.00 },
            { key: "Apis and\nMicroservices\nCertification", progress: 0.25 },
            { key: "Information\nSecurity\nand Quality\nAssurance", progress: 0.50 },
            { key: "Coding \nInterview\nPrep", progress: 0.75 },
            { key: "Skill 8", progress: 1.00 },
        ];
        const { height, width } = Dimensions.get('window');
        const OFFSET = (width/2) - 75

        console.log(height);

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
                <View style={styles.contentContainerStyle}>
                    <Animated.Image
                        style={[styles.bgStyle, viewTranslate]} 
                        source={require('../../assets/img/skyline.jpg')}
                    />
                    <AnimatedFlatList
                        style={[styles.flatListStyle, {width: width}]}
                        scrollEventThrottle={16}
                        horizontal
                        data={ certifications }
                        renderItem={({item}) => <Tower title={item.key} progress={item.progress} />}
                        onScroll={onScroll}
                        snapToInterval={150}
                        snapToAlignment={'center'}
                        decelerationRate={'fast'}
                        contentOffset={{ x: -OFFSET, y: 0 }}
                        contentInset={{top: 0, left: OFFSET , right: OFFSET, bottom: 0}}
                        contentContainerStyle={[
                            IS_ANDROID && { paddingHorizontal: OFFSET},
                            { alignItems: 'center' }
                        ]}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: STYLES.CONTAINER_STYLE,
    contentContainerStyle: { flex: 1, overflow: 'hidden'},
    bgStyle: {
        position: 'absolute',
        top: IS_ANDROID ? -357 : -315,
        left: IS_ANDROID ? -330 : -390,
        zIndex: -5,
        opacity: 0.3
    },
    flatListStyle: {
        height: '100%',
        position: 'absolute',
    }
})

const mapStateToProps = ({ auth, scrape }) => {
    const {user} = auth;
    const {fccUserStats} = scrape;
    return {user, fccUserStats};
}

export default connect(mapStateToProps, {scrape})(HomeScreen);
