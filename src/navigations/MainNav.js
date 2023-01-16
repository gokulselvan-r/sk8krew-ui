import React,{useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppTab from './AppBottomTab';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';

function Main() {
  const {loading, userToken} = useContext(AuthContext);
  if(loading) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator size={"large"} />
    </View>
    )
  }
  return (
    <NavigationContainer>
      {
        userToken !== null ? <AppTab/> : <AuthStack />
      }
    </NavigationContainer>
  );
}

export default Main;
