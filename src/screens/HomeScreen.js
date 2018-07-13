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
import { FCCSpinner } from "../components/FCCSpinner";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const IS_ANDROID = Platform.OS === 'android';

// const insertNLs = (str) => {
//     if (str !== undefined) {
//         var j = 0;
//         var arr = str.split('');
//         for (let i = 0; i < arr.length; i++) {    
//             if ((arr[i] === ' ') && (j > 5)) {
//                 arr[i] = '\n';
//                 j = 0;
//             }
//             if ((arr[i] === ' ') && (arr[i+1] === 'V')) {
//                 arr[i] = '\n';
//                 j = 0;
//             }
//             j++;
//         }
//         str = arr.join('');
//     }
    
//     return str;
// };

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
        // TEST DATA
        // const certifications = [
        //     { key: '1', title: "Responsive Web Design", progress: 1.00 },
        //     { key: '2', title: "Javascript Algorithms and Data Structures", progress: 1.00 },
        //     { key: '3', title: "Front End Libraries", progress: 1.00 },
        //     { key: '4', title: "Data Visualization", progress: 1.00 },
        //     { key: '5', title: "Apis and Microservices Certification", progress: 1.00  },
        //     { key: '6', title: "Information Security and Quality Assurance", progress: 1.00 },
        //     { key: '7', title: "Coding Interview Prep", progress: 1.00 },
        //     { key: '8', title: "Skill 8", progress: 1.00 },
        // ];
        const { width } = Dimensions.get('window');
        const OFFSET = (width/2) - 75

        const onScroll = Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.xOffset } } }],
            { useNativeDriver: true }
        );
        const viewTranslate = this.viewTranslate();

        //console.log(this.props.fccUserStats);

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
                    {this.props.fccUserStats.length
                    ? 
                        <AnimatedFlatList
                            style={[styles.flatListStyle, {width: width}]}
                            scrollEventThrottle={16}
                            horizontal
                            data={ this.props.fccUserStats }
                            renderItem={({item}) => <Tower title={(item.title)} progress={item.progress} />}
                            onScroll={onScroll}
                            snapToInterval={150}
                            snapToAlignment={'center'}
                            decelerationRate={'fast'}
                            contentOffset={{ x: -OFFSET, y: 0 }}
                            contentInset={{top: 0, left: OFFSET , right: OFFSET, bottom: 0}}
                            contentContainerStyle={[
                                IS_ANDROID && { paddingHorizontal: OFFSET},
                                { alignItems: 'center', height: '100%'}
                            ]}
                            showsHorizontalScrollIndicator={false}
                        />
                    : 
                        <View style={styles.spinnerStyle}>
                            <FCCSpinner size={80}/>
                        </View>
                    }
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
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = ({ auth, scrape }) => {
    const {user} = auth;
    const {fccUserStats} = scrape;
    return {user, fccUserStats};
}

export default connect(mapStateToProps, {scrape})(HomeScreen);
