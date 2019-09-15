import React,{Component} from 'react';
import {View,TextInput} from 'react-native';
import {Text,Button} from 'react-native-elements';
import axios from 'axios';

const ROOT_URL='https://us-central1-one-time-password-217a1.cloudfunctions.net';
class SignUpForm extends Component{
       constructor(props){
           super(props);
            this.state={phone:''};
       }

    handleSubmit=async ()=>{

        try {
            await axios.post(`${ROOT_URL}/createUser`, {
                phone: this.state.phone
            });
            await  axios.post(`${ROOT_URL}/requestOneTimePassword`,{phone:this.state.phone});
        }catch(err){
            console.log(err);
        }
    }
    render(){
        return(
            <View>
                <Text>Enter Phone Number </Text>
                <TextInput
                value={this.state.phone}
                onChangeText={phone=>this.setState({phone})}
                />
                <Button onPress={this.handleSubmit} title="Submit"/>
            </View>
        )
    }
}

export default SignUpForm;