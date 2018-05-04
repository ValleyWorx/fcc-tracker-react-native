//imprort libraries for making a component
import React from 'react';
import { Image, View, Text } from 'react-native';
import * as STYLES from '../styles';
import { Icon } from 'react-native-elements';

class Header extends React.Component {
    renderLeft = (type) => {
        switch (type) {
            case 'back':
                return (
                    <Icon
                        name={'chevron-left'}
                        type={'material-community'}
                        size={40}
                        color={"#fff"}
                        onPress={this.props.leftPress}
                        underlayColor={STYLES.MAIN_COLOR}
                    />
                )
        }
    }

    renderCenter = (type) => {
        switch (type) {
            case 'logo':
                return (
                    <Image
                        style={styles.imageStyle}
                        source={require('../../assets/img/freeCodeCamp.png')}
                        resizeMode={'contain'}
                    />
                )
            case 'text':
                return (
                    <Text style={styles.centerTextStyle}>
                        {this.props.centerText}
                    </Text>
                )
        }
    }

    renderRight = () => {
        return (
            <View style={styles.rightContainer}>

            </View>
        );
    }

    render() {
        const { leftType, centerType, rightType } = this.props;
        return (
            <View style={styles.viewStyle}>
                <View style={styles.leftContainer}>
                    {this.renderLeft(leftType)}
                </View>
                <View style={styles.centerContainer}>
                    {this.renderCenter(centerType)}
                </View>
                {this.renderRight()}
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "flex-start",
        height: 70,
        backgroundColor: STYLES.MAIN_COLOR,
        alignItems: 'center',
    },
    leftContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerContainer: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: '100%',
        height: 70,
    },
    centerTextStyle: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    }
};

export default Header;