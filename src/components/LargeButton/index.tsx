import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageSourcePropType
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  image: ImageSourcePropType;
}

export function LargeButton({ title, image, ...rest }: Props) {

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <LinearGradient
        colors={[theme.colors.green[100], theme.colors.green[90]]}
        style={styles.button}
      >
        <Text style={styles.title}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}