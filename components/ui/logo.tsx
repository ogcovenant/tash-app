import type { ImageStyle, StyleProp } from 'react-native';
import { Image } from 'react-native';

const logoSource = require('../../assets/images/logo.png');

type LogoProps = {
  size?: number;
  style?: StyleProp<ImageStyle>;
};

export function Logo({ size = 40, style }: LogoProps) {
  return (
    <Image
      source={logoSource}
      accessibilityLabel="Tash logo"
      resizeMode="contain"
      style={[{ width: size, height: size }, style]}
    />
  );
}
