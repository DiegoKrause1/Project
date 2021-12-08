import React from 'react';
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

export function SignUp() {
  return (
    <View style={styles.container}>
      <Header title="Hello!" subTitle="lets introduce" />
      <Input image={Person} keyboardType="email-address" placeholder="Username" />
      <Input image={Password} secureTextEntry placeholder="Create password" />
      <Input image={Password} secureTextEntry placeholder="Repeat password" />
      <LargeButton title="Create" image={Vector} />
    </View>
  )
}