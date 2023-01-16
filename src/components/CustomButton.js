
import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../style';

export default function CustomButton({ label, onPress, iconName, width }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[Styles.customButton, {width}]}>
            <Text
                style={Styles.customButtonText}>
                {label}
            </Text>
            {
                iconName ?
                    <Ionicons
                        style={Styles.customButtonFont}
                        name={iconName}
                        color={'#7FFFD4'}
                        size={22}
                    /> :
                    <></>
            }

        </TouchableOpacity>
    );
}