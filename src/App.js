import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBtKVUsyrnO_U2fE2IzXn9tNgOJ3xnuDpY",
            authDomain: "auth-4b2f5.firebaseapp.com",
            databaseURL: "https://auth-4b2f5.firebaseio.com",
            projectId: "auth-4b2f5",
            storageBucket: "auth-4b2f5.appspot.com",
            messagingSenderId: "662577797927"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <LoginForm />
            </View>
        );
    }
}

export default App;