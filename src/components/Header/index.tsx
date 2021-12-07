import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  subTitle: string;
}

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