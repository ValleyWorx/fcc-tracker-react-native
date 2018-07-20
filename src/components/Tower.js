import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import * as STYLES from '../styles';
import Building1 from '../../assets/animations/skyscraper3';
import Building2 from '../../assets/animations/carrie1';
import Building3 from '../../assets/animations/monica1';
import Building4 from '../../assets/animations/celina';
import Building5 from '../../assets/animations/carrie2';
import Building6 from '../../assets/animations/monica2';
import { DangerZone } from 'expo';

const BUILDINGS = [
    Building1,
    Building2,
    Building3,
    //Building4,
    Building5,
    //Building6,
    //Building1
]

let { Lottie } = DangerZone;

export class Tower extends React.Component {
    componentDidMount() { 
        const pct = 900 * this.props.progress;
        
        if (pct === 0){
            return;
        }
        // this.animation.play();
        this.animation.play(0, pct);
    }
    render() {
        const { title, index, progress } = this.props;
        const { viewStyle, textOneStyle, textTwoStyle, aniStyle } = styles;
        const percent = Math.round(progress*100);

        return (
          <View style={viewStyle}>
            <Text style={textOneStyle}>
              {title}
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
                source={BUILDINGS[index%BUILDINGS.length]}
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
