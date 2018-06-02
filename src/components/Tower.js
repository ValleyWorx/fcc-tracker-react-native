import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import * as STYLES from '../styles';
import SkyScraper from '../../assets/animations/skyscraper';
import { DangerZone } from 'expo';
let { Lottie } = DangerZone;

export class Tower extends React.Component {
    componentDidMount() { 
        const pct = 900 * this.props.progress;
        this.animation.play(0, pct);
    }
    render() {
        const { viewStyle, textOneStyle, textTwoStyle, aniStyle } = styles;
        const percent = this.props.progress*100;
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
        marginTop: 100
    },
    textOneStyle: {
      textAlign: 'center',
      color: STYLES.MAIN_COLOR,
      fontSize: 18,
      fontWeight: 'bold'
    },
    textTwoStyle: {
      textAlign: 'center',
      top: 45,
      left: 10,
      color: STYLES.MAIN_COLOR,
      fontSize: 18,
      fontWeight: 'bold'
    },
    aniStyle: {
        // flex: 1,
        width: 150,
        // top: -30,
        // left: 64,
        // justifyContent: 'center',
        height: 300
    }
})
