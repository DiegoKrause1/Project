//NATIVES
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TextInputProps,
  ImageSourcePropType
} from 'react-native';

//STYLES
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

//PROPS
type Props = TextInputProps & {
  image: ImageSourcePropType
}

//VIEW
export function Input({ image, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Image source={image} />
      <TextInput placeholderTextColor={theme.colors.white.subTitle} style={styles.input} {...rest} />
    </View>
  );
}