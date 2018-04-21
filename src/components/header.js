//imprort libraries for making a component
import React from 'react';
import { Image, View } from 'react-native';

//make a component
export const Header = (props) => {
    const { imageStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Image style={imageStyle} source={require('../../assets/img/freeCodeCamp.png')} />
        </View>
    );
};

const styles = {
    viewStyle: {
        width: "100%",
        // flex: 1,
        justifyContent: "flex-start",
        height: 100,
        backgroundColor: "#006400"
    },
    imageStyle: {
        position: 'relative',
        top: 10,
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
};
