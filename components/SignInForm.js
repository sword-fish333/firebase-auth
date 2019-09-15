import React,{Component} from 'react';
import {View,TextInput} from 'react-native';
import {Text,Button} from 'react-native-elements';
import firebase from 'firebase';
import axios from 'axios';

const ROOT_URL='https://us-central1-one-time-password-217a1.cloudfunctions.net';
class SignInForm extends Component{


    constructor(props){
        super(props);
        this.state={phone:'',code:''};
    }

    handleSubmit= async()=>{
        try {
            const {phone, code} = this.state;
          let {data}=  await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {code, phone});
          firebase.auth().signInWithCustomToken(data.token);
        }catch(err){
            console.log(err);
        }
        }
    render(){
        return(
            <View>
                <View style={{marginBottom:10}}>
                <Text>Enter Phone Number </Text>
                <TextInput
                    value={this.state.phone}
                    onChangeText={phone=>this.setState({phone})}
                />
                </View>
                <View style={{marginBottom:10}}>
                    <Text>Enter Code </Text>
                    <TextInput
                        value={this.state.code}
                        onChangeText={code=>this.setState({code})}
                    />
                </View>
                <Button onPress={this.handleSubmit} title="Submit"/>
            </View>
        )
    }
}

export default  SignInForm;