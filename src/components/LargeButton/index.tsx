//NATIVES
import React, { ButtonHTMLAttributes } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageSourcePropType
} from 'react-native';

//COMPONENTS
import { LinearGradient } from 'expo-linear-gradient'

//STYLES
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

//UI KIT
import { Button, IButtonProps } from 'native-base';

//PROPS
type Props = IButtonProps & {
  title: string;
  transparency: boolean;
}

//VIEW
export function LargeButton({ title, transparency, ...rest }: Props) {
  return (
    <View>
      {
        transparency ?
          <Button style={styles.buttonOpacity} {...rest}>
            <Text style={styles.titleOpacity}>
              {title}
            </Text>
          </Button>
          :
          <Button style={styles.button} {...rest}>
            <Text style={styles.title}>
              {title}
            </Text>
          </Button>
      }
    </View>
  );
}