//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../components/tabs/Home'
import Register from '../components/tabs/Register'
import Articles from '../components/drawers/Articles'
import Settings from '../components/drawers/Settings'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// create a component
export const TabNavigate = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Register" component={Register}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export const DrawerNavigate = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Articles" component={Articles}/>
                <Drawer.Screen name="Settings" component={Settings}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

