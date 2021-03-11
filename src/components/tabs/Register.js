//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

// create a component
const Register = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='email'
            />
            <TextInput
                placeholder='password'
                secureTextEntry={true}
            />
            <Button
                title='CREATE ACCOUNT'
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
export default Register;
