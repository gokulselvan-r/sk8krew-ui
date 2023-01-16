import React, {useRef} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Image,
    Pressable,
    View,
    Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feeds from '../screens/Feeds';
import Search from '../screens/Search';
import ROUTES from '../constants/ROUTES';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import Location from '../screens/Location';
import COLORS from '../constants/COLORS';
import Styles from '../style';

const Tab = createBottomTabNavigator();




const AppTab = (props) => {
    const sheetRef = useRef(null);

    const handlePostAdd = () => {
        sheetRef.current?.show();
    }

    return (
        <Tab.Navigator screenOptions={({ route, navigation }) => ({
            headerTitle: (props) => {
                if (route.name === ROUTES.FEEDS) {
                    return <Image
                        style={{ width: 90, height: 70, transform: [{rotate: '23deg'}] }}
                        source={require('./../assets/images/2.png')}
                    />
                } else if (route.name === ROUTES.SEARCH) {
                    return <></>
                } else if (route.name === ROUTES.SETTINGS) {
                    return <></>
                } else if (route.name === ROUTES.NOTIFICATION) {
                    return <>
                        <Text style={{ color: COLORS.secondary, fontSize: 20, fontWeight : 'bold' }}>Notifications</Text></>
                } else if (route.name === ROUTES.LOCATION) {
                    return <></>
                }
            },
            headerStyle: {
                backgroundColor: route.name === ROUTES.FEEDS ? COLORS.primary : COLORS.white,
                borderWidth: 0
              },
            headerRight: (props) => {
                if (route.name === ROUTES.FEEDS) {
                    return (
                        <Pressable onPress={handlePostAdd}>
                            <Ionicons
                                name="add-outline"
                                color={COLORS.white}
                                style={{marginRight:10}}
                                size={30}
                            />
                        </Pressable>
                    )

                } else if (route.name === ROUTES.SEARCH) {
                    return <></>
                } else if (route.name === ROUTES.PROFILE) {
                    return <></>
                } else if (route.name === ROUTES.NOTIFICATION) {
                    return <></>
                } else if (route.name === ROUTES.LOCATION) {
                    return <></>
                }
            },
            headerShown: route.name === ROUTES.FEEDS || route.name === ROUTES.NOTIFICATION ? true : false,
            // headerShown: route.name === ROUTES.NOTIFICATION ? true : false,
            tabBarStyle: {
                backgroundColor: COLORS.primary
            },
            tabBarIcon: ({ color, size, focused }) => {
                let iconName;
                if (route.name === ROUTES.FEEDS) {
                    iconName = focused ? 'home-sharp' : 'home-outline';
                } else if (route.name === ROUTES.SEARCH) {
                    iconName = focused ? 'search-sharp' : 'search-outline';
                } else if (route.name === ROUTES.NOTIFICATION) {
                    iconName = focused ? 'notifications-sharp' : 'notifications-outline';
                } else if (route.name === ROUTES.LOCATION) {
                    iconName = focused ? 'map-sharp' : 'map-outline';
                } else if (route.name === ROUTES.NEW_POST) {
                    iconName = focused ? 'add' : 'add-outline';
                } else if (route.name === ROUTES.PROFILE) {
                    iconName = focused ? 'settings-sharp' : 'settings-outline';
                    return (
                        <Image
                            style={{ width: 25, height: 25, borderRadius: 50 }}
                            source={require('./../assets/images/3.png')}
                        />
                    );
                }
                return (
                    <Ionicons
                        name={iconName}
                        color={focused ? COLORS.front : '#fff'}
                        size={22}
                    />
                );
            },
            tabBarShowLabel: false,
            tabBarIconStyle: Styles.container,
            tabBarActiveBackgroundColor: COLORS.secondary,
        })}>
            <Tab.Screen name={ROUTES.FEEDS} children={props => <Feeds sheetRef={sheetRef} {...props}/>} />
            {/* <Tab.Screen name={ROUTES.LOCATION} component={Location} /> */}
            <Tab.Screen name={ROUTES.SEARCH} component={Search} />
            {/* <Tab.Screen name={ROUTES.NEW_POST} component={CreatePost} /> */}
            <Tab.Screen name={ROUTES.NOTIFICATION} component={Notifications} />
            <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
        </Tab.Navigator>
    )
}

export default AppTab