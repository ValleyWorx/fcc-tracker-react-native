import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import Header from '../components/Header';
import * as STYLES from '../styles';
import {scrape} from '../actions';
import { Tower } from '../components/Tower';

class HomeScreen extends React.Component {

    componentDidMount() {
        this.props.scrape();
    }

    // getTowers = (campers) => {
    //     return campers.map((camper) => {
    //         const { title, progress } = camper;
    //         return (
    //             <Tower title={title} progress={progress} />
    //         );
    //     })
    // }

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

        return (
            <View style={styles.containerStyle}>
                <Header
                    centerType={'text'}
                    centerText={'Home'}
                />

                <Image
                    style={styles.bgStyle} 
                    source={require('../../assets/img/skyline.jpg')}
                />
                <FlatList
                    horizontal
                    data={ campers }
                    renderItem={({item}) => <Tower title={item.key} progress={item.progress} />}
                />

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
        height: 980,
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