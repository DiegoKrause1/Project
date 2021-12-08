import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function TinyButton({ title, ...rest }: Props) {
  return (
    <LinearGradient
      colors={['#286053', '#286053']}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.button}
        {...rest}
      >
        <Text>
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}