import React from "react";

import { View } from "react-native";

const Separator = props => {
    return (
        <View
            style={[
                {
                    height: 1,
                    borderWidth: 0.5,
                    opacity: 0.1
                }
            ]}
        />
    );
};

export { Separator };
