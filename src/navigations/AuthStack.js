import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ROUTES from "../constants/ROUTES";
import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation:"slide_from_right"
        }}>
            <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
            <Stack.Screen name={ROUTES.LOGIN} component={Login} />
            <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
            <Stack.Screen name={ROUTES.REGISTER} component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStack