import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/COLORS';

import Styles from '../style';

const CustomTextInput = ({
    label,
    iconType,
    iconName,
    inputType,
    keyboardType,
    fieldButtonLabel,
    fieldButtonFunction,
    onChange
}) => {
    return (
        <View style={Styles.customInputView}>
            {
                iconType === 'io' ?
                    <Ionicons
                        name={iconName}
                        size={25}
                        color={COLORS.front}
                        style={Styles.customInputIcon}
                    /> :
                    <MaterialIcons
                        name={iconName}
                        size={25}
                        color={COLORS.front}
                        style={Styles.customInputIcon}
                    />
            }

            {inputType == 'password' ? (
                <TextInput
                    placeholderTextColor={COLORS.front}
                    onChangeText={onChange}
                    placeholder={label}
                    keyboardType={keyboardType}
                    style={Styles.customInput}
                    secureTextEntry={true}
                />
            ) : (
                <TextInput
                    placeholderTextColor={COLORS.front}
                    placeholder={label}
                    keyboardType={keyboardType}
                    onChangeText={onChange}
                    style={Styles.customInput}
                />
            )}
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={Styles.customInputText}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomTextInput;