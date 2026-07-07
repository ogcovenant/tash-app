import * as React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import { resolveFontFamily } from '@/constants/fonts';

export function AuthTextInput(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#A94E2C"
      selectionColor="#C75A3A"
      {...props}
      style={[
        {
          height: 54,
          backgroundColor: '#E8D6C8',
          borderRadius: 16,
          paddingHorizontal: 18,
          fontSize: 16,
          color: '#1F1714',
          fontFamily: resolveFontFamily('SourceSans3', 'Regular'),
        },
        props.style,
      ]}
    />
  );
}
