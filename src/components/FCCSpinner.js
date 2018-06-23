import React from 'react';
import { Image } from 'react-native';

const FCCSpinner = ({ size = 40 }) => {
    return (
        <Image
          style={{ width: size, height: size}}
          source={require('../../assets/img/fcc-ani-campfire.gif')}
        />
    );
};


export { FCCSpinner };