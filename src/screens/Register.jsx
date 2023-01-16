import React, { useState, useContext } from 'react';
import {
    View,
    Image,
    Pressable,
    Text,
    TouchableOpacity
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { AuthContext } from './../context/AuthContext'

import Styles from '../style';
import ROUTES from '../constants/ROUTES';
import COLORS from '../constants/COLORS';

const Register = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { loginUser } = useContext(AuthContext);
    return (
        <View style={Styles.container}>
            <View style={Styles.logoView}>
                <Image
                    style={Styles.logoImage}
                    source={require('./../assets/images/2.png')}
                >
                </Image>
            </View>
            <View style={Styles.loginFormView}>
                <CustomTextInput
                    label={'Username'}
                    iconType="io"
                    iconName="person-circle"
                    keyboardType="default"
                    onChange={username => setUsername(username)}
                />
                <CustomTextInput
                    label={'Password'}
                    iconType="io"
                    iconName="lock-closed-outline"
                    keyboardType="password"
                    inputType="password"
                    onChange={password => setPassword(password)}
                    fieldButtonLabel={"Show"}
                    fieldButtonFunction={() => { }}
                />
                <CustomTextInput
                    label={'Confirm Password'}
                    iconType="io"
                    iconName="lock-closed-outline"
                    keyboardType="password"
                    inputType="password"
                    onChange={confirmPassword => setConfirmPassword(confirmPassword)}
                    // fieldButtonLabel={"Forgot?"}
                    // fieldButtonFunction={() => { }}
                />
                <View style={{ alignItems:'center'}}>
                    <CustomButton label="REGISTER" width={"70%"} onPress={() => { loginUser(username, password) }} />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text style={{color:COLORS.front}}>SK8 Krew Member? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register