//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

import firebase from '@react-native-firebase/app'
import analytics from '@react-native-firebase/analytics'

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
        title="Add To Basket"
        onPress={async () =>
          await analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
        }
      />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
