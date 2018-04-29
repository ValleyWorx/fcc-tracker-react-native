import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

import { Icon } from 'react-native-elements';

export default class FacebookButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.btn} onPress={this.props.onPress}>
                <View style={styles.btnContainer}>
                    <Icon name={'facebook-f'} size={50} color={'white'} type={'font-awesome'} />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        paddingTop: 5,
        height: 70,
        width: 70,
        backgroundColor: '#3b5998',
        borderRadius: 50,
        marginHorizontal: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})