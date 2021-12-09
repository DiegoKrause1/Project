//NATIVES
import React, { useState } from 'react';
import {
  View,
  Text
} from 'react-native';

//IMAGES
import Person from '../../assets/Name_Field_Icon.png';
import Password from '../../assets/Password_Field_Icon.png';
import Vector from '../../assets/Shape.png';

//STYLES
import { styles } from './styles';

//COMPONENTS
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { LargeButton } from '../../components/LargeButton';

//NAVIGATIONS
import { useNavigation } from '@react-navigation/native';

//SERVICES
import { login } from '../../services/login';

//UI KIT
import { useToast } from 'native-base';


export function Login() {
  //STATES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //DECLARATIONS
  const toast = useToast();
  const navigation = useNavigation();

  //FUNCTIONS
  function createAccount() {
    navigation.navigate('SignUp');
  }

  function loginService() {
    login(email, password).then(() => {
      navigation.navigate('Home');
    }).catch(err => {
      toast.show({
        title: 'Erro ao realizar o login',
        status: 'error',
        placement: 'top',
        description: err.message
      })
    })
  }

  //VIEW
  return (
    <View style={styles.container}>
      <Header title="Wellcome!" subTitle="Sign in to continue" />
      <Input
        keyboardType="email-address"
        onChangeText={email => setEmail(email)}
        value={email}
        image={Person}
        placeholder="Your username"
      />
      <Input
        onChangeText={password => setPassword(password)}
        value={password}
        image={Password}
        placeholder="Your password"
        secureTextEntry
      />
      <LargeButton
        onPress={loginService}
        transparency={false}
        title="Login"
      />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <LargeButton
        onPress={createAccount}
        transparency={true}
        title="Create an Account"
      />
    </View>
  );
}