import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import firebase from 'firebase';
import SignInForm from './components/SignInForm';

class  App extends Component{

    componentDidMount(){

        var firebaseConfig = {
            apiKey: "AIzaSyB0X9P2FlpL6CaTUBYltGzDnM5c1uSwpes",
            authDomain: "one-time-password-217a1.firebaseapp.com",
            databaseURL: "https://one-time-password-217a1.firebaseio.com",
            projectId: "one-time-password-217a1",
            storageBucket: "",
            messagingSenderId: "1042091242838",
            appId: "1:1042091242838:web:a89466eaf240038100d2f7"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstEl}>
                    <SignUpForm />
                </View>

                <SignInForm/>
            </View>
        );
    }
}
export  default App;
const styles = StyleSheet.create({
    firstEl:{
        marginBottom:100,

    },
  container: {
   // marginTop:150,
    flex:1,
      justifyContent:'space-around',
      paddingHorizontal:50
  },
});
