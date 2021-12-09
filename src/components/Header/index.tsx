//NATIVES
import React from 'react';
import {
  View,
  Text
} from 'react-native';

//STYLES
import { styles } from './styles';

//PROPS
type Props = {
  title: string;
  subTitle: string;
}

//VIEW
export function Header({ title, subTitle }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  );
}