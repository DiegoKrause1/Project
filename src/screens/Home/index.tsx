import React, { useEffect } from 'react';
import { styles } from './styles';
import {
  View,
  BackHandler,
  Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

//UI KIT
import { AlertDialog, Button } from 'native-base';
import { Logout } from '../../services/logout';

export function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)

  const cancelRef = React.useRef(null)
  const navigation = useNavigation();

  const backAction = () => {
    Alert.alert('sair da conta ?', 'isso ai', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancel pressed'),
        style: 'cancel'
      },
      {
        text: 'Sair',
        onPress: () => logoutService(),
        style: 'default'
      }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
    BackHandler.removeEventListener("hardwareBackPress", backAction)
  }, [])

  function logoutService() {
    Logout();
    navigation.navigate('Login');
    return true;
  }

  const Example = () => {
    Alert.alert('sair da conta ?', 'isso ai', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancel pressed'),
        style: 'cancel'
      },
      {
        text: 'Sair',
        onPress: () => logoutService(),
        style: 'default'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Button onPress={Example}>Alert</Button>
    </View>
  );
}