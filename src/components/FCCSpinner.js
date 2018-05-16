import React from 'react';
import { View, Image } from 'react-native';

const FCCSpinner = ({ size }) => {
    return (
        <Image
          style={styles.aniStyle}
          source={require('../../assets/img/fcc-ani-campfire.gif')}
        />
    );
};

const styles = {
    aniStyle: {
      width: 40, 
      height: 40
    }
};

export { FCCSpinner };