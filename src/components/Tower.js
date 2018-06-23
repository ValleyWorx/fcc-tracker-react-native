import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import * as STYLES from '../styles';
import SkyScraper from '../../assets/animations/skyscraper3';
import { DangerZone } from 'expo';
let { Lottie } = DangerZone;

export class Tower extends React.Component {
    componentDidMount() { 
        const pct = 900 * this.props.progress;
        this.animation.play(0, pct);
    }
    render() {
        const { viewStyle, textOneStyle, textTwoStyle, aniStyle } = styles;
        const percent = Math.round(this.props.progress*100);
        return (
          <View style={viewStyle}>
            <Text style={textOneStyle}>
              {this.props.title}
            </Text>
            <Lottie
                ref={animation => {
                    if(animation) {
                        this.animation = animation;
                    }
                }}
                style={aniStyle}
                speed={10}
                loop={false}
                source={SkyScraper}
            />
            <Text style={textTwoStyle}>
              {percent}%
            </Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        height: '75%',
        justifyContent: 'space-between'
    },
    textOneStyle: {
    
      width: 150,
      height: 90,
      paddingHorizontal: 10,
      textAlign: 'center',
      color: STYLES.MAIN_COLOR,
      fontSize: 18,
      fontWeight: 'bold'
    },
    textTwoStyle: {
      textAlign: 'center',
      //top: 40,
      //left: 10,
      color: STYLES.MAIN_COLOR,
      fontSize: 18,
      fontWeight: 'bold'
    },
    aniStyle: {
        marginTop: Platform.OS === 'ios' ? -50 : 0,
        width: 150,
        top: -30,
        // left: 64,
        // justifyContent: 'center',
        height: 300
    }
})
