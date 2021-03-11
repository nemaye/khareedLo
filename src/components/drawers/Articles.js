//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import firestore from '@react-native-firebase/firestore';



getUser = async () => {
    const userDoc = await firestore().collection("users").doc("7UZGxOLLwBcJFc5sk3yG").get()
    console.log(userDoc)
}

// create a component
const Articles = () => {
    return (
        <View style={styles.container}>
            <Button
                title='get'
                onPress={getUser}
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
export default Articles;
