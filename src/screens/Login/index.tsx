import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { styles } from './styles';
import Person from '../../assets/Name_Field_Icon.png';
import Password from '../../assets/Password_Field_Icon.png';
import Vector from '../../assets/Shape.png';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { LargeButton } from '../../components/LargeButton';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  const navigation = useNavigation();
 
  function createAccount() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Header title="Wellcome!" subTitle="Sign in to continue" />
      <Input image={Person} placeholder="Your username" />
      <Input image={Password} placeholder="Your password" secureTextEntry/>
      <LargeButton opacity={false} activeOpacity={.8} image={Vector} title="Login" />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <LargeButton onPress={createAccount} opacity={true} activeOpacity={.8} image={Vector} title="Create an Account" />
    </View>
  );
}