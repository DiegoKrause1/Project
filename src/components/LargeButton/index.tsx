import React from 'react';
import {
  Text,
  Image,
  View,
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
  opacity?: boolean;
}

export function LargeButton({ title, image, opacity, ...rest }: Props) {

  return (
    <View>
      {
        opacity ?
          <TouchableOpacity style={styles.container} {...rest}>
            <LinearGradient
              colors={['#286053', '#286053']}
              style={styles.button}
            >
              <Text style={styles.titleOpacity}>
                {title}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          :
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
      }
    </View>
    // <TouchableOpacity style={styles.container} {...rest}>
    //   <LinearGradient
    //     colors={[theme.colors.green[100], theme.colors.green[90]]}
    //     style={styles.button}
    //   >
    //     <Text style={styles.title}>
    //       {title}
    //     </Text>
    //   </LinearGradient>
    // </TouchableOpacity>
  );
}