import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react-native';
import {
    Animated,
    View,
    Text
} from 'react-native';
import {
    Easing
} from 'react-native-reanimated';
import Style from './../style/index';
import CustomButton from '../components/CustomButton';
import ROUTES from '../constants/ROUTES';

export default function SplashScreen({navigation}) {
    const [showButton, setShowButton] = useState(false);
    const backgroundColorValue = React.useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(backgroundColorValue, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
        setTimeout(() => {
            setShowButton(true)
        }, 3000);
    }, [])
    const backgroundColor = backgroundColorValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['#bab3b3', '#000000'],
    })
    return (
        <Animated.View
            style={{ ...Style.container, backgroundColor }}
        >
            <View style={{ flex: 5, width: 400, height: 400 }}>
                <Lottie
                    autoPlay
                    speed={1}
                    source={require('../assets/splash.json')}
                />
            </View>
            
                {
                    showButton ? <CustomButton width={"80%"} label="Get Started" onPress={() => { navigation.navigate(ROUTES.LOGIN) }} /> 
                    : 
                    <View style={{
                        padding: 20,
                        borderRadius: 10,
                        margin: 40,
                    }}>
                    </View>
                }
        </Animated.View>

    );
}