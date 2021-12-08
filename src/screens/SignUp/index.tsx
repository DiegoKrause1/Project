import React, { useState } from 'react';
import {
  View
} from 'react-native';
import { Input } from '../../components/Input';
import Person from '../../assets/Name_Field_Icon.png';
import Password from '../../assets/Password_Field_Icon.png';
import Vector from '../../assets/Shape.png';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { LargeButton } from '../../components/LargeButton';
import { createAccount } from '../../services/createAccount';
import {
  useToast
} from 'native-base';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();

  function create() {
    createAccount(email, password).then(() => {
      console.log('criou')
      toast.show({
        title: 'Create',
        status: 'success',
        description: 'foi'
      })
    }).catch(err => {
      console.log('erro' + err.message)
      toast.show({
        title: 'Err',
        status: 'error',
        description: err.message
      })
    })
  }

  return (
    <View style={styles.container}>
      <Header title="Hello!" subTitle="lets introduce" />
      <Input onChangeText={email => setEmail(email)} value={email} image={Person} keyboardType="email-address" placeholder="Email address" />
      <Input onChangeText={password => setPassword(password)} value={password} image={Password} secureTextEntry placeholder="Create password" />
      <Input image={Password} secureTextEntry placeholder="Repeat password" />
      <LargeButton onPress={create} opacity={true} title="Create" image={Vector} />
    </View>
  )
}