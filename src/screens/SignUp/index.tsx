//NATIVES
import React, { useState } from 'react';
import {
  View,
} from 'react-native';

//IMAGES
import Person from '../../assets/Name_Field_Icon.png';
import Password from '../../assets/Password_Field_Icon.png';

//STYLES
import { styles } from './styles';

//COMPONENTS
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { LargeButton } from '../../components/LargeButton';

//NAVIGATIONS
import { useNavigation } from '@react-navigation/native';

//SERVICES
import { createAccount } from '../../services/createAccount';

//UI KIT
import { useToast } from 'native-base';


export function SignUp() {
  //STATES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState();

  //DECLARATIONS
  const toast = useToast();
  const navigation = useNavigation();

  //FUNCTIONS
  function createAccountService() {
    //setLoading(loading => !loading)
    (password && repeatPassword !== '' && password === repeatPassword) ?
      createAccount(email, password).then(() => {
        //loading = false;
        console.log('success')
        toast.show({
          title: 'Conta criada com sucesso!',
          status: 'success',
          placement: 'top'
        })
        navigation.navigate('Home');
      }).catch(err => {
        //loading = false;
        toast.show({
          title: 'Erro ao criar a sua conta',
          status: 'error',
          placement: 'top',
          description: err.message
        })
      })
      :
      //loading = false;
    toast.show({
      title: 'As senhas não conferem',
      status: 'warning',
      description: 'Digite a mesma senha nos campos'
    })
  }

  //VIEW
  return (
    <View style={styles.container}>
      <Header
        title="Hello!"
        subTitle="lets introduce"
      />
      <Input
        onChangeText={email => setEmail(email)}
        value={email}
        image={Person}
        keyboardType="email-address"
        placeholder="Email address"
      />
      <Input
        onChangeText={password => setPassword(password)}
        value={password}
        image={Password}
        secureTextEntry
        placeholder="Create password"
      />
      <Input
        onChangeText={repeatPassword => setRepeatPassword(repeatPassword)}
        value={repeatPassword}
        image={Password}
        secureTextEntry
        placeholder="Repeat password"
      />
      <LargeButton
        onPress={createAccountService}
        transparency={false}
        title="Create"
        isLoading={loading}
      />
    </View>
  )
}