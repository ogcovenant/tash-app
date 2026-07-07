import {
  Onest_100Thin,
  Onest_200ExtraLight,
  Onest_300Light,
  Onest_400Regular,
  Onest_500Medium,
  Onest_600SemiBold,
  Onest_700Bold,
  Onest_800ExtraBold,
  Onest_900Black,
} from '@expo-google-fonts/onest';

import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black_Italic,
} from '@expo-google-fonts/playfair-display';

export const FontFamily = {
  PlayfairDisplay: 'PlayfairDisplay',
  Onest: 'Onest',
} as const;

export type FontFamilyKey = keyof typeof FontFamily;

export const FontWeight = {
  Thin: 'Thin',
  ExtraLight: 'ExtraLight',
  Light: 'Light',
  Regular: 'Regular',
  Medium: 'Medium',
  SemiBold: 'SemiBold',
  Bold: 'Bold',
  ExtraBold: 'ExtraBold',
  Black: 'Black',
} as const;

export type FontWeightKey = keyof typeof FontWeight;

export const FontStyle = {
  Normal: 'Normal',
  Italic: 'Italic',
} as const;

export type FontStyleKey = keyof typeof FontStyle;

const playfairMap: Record<string, Record<string, string>> = {
  Regular: {
    Normal: 'PlayfairDisplay_400Regular',
    Italic: 'PlayfairDisplay_400Regular_Italic',
  },
  Medium: {
    Normal: 'PlayfairDisplay_500Medium',
    Italic: 'PlayfairDisplay_500Medium_Italic',
  },
  SemiBold: {
    Normal: 'PlayfairDisplay_600SemiBold',
    Italic: 'PlayfairDisplay_600SemiBold_Italic',
  },
  Bold: {
    Normal: 'PlayfairDisplay_700Bold',
    Italic: 'PlayfairDisplay_700Bold_Italic',
  },
  ExtraBold: {
    Normal: 'PlayfairDisplay_800ExtraBold',
    Italic: 'PlayfairDisplay_800ExtraBold_Italic',
  },
  Black: {
    Normal: 'PlayfairDisplay_900Black',
    Italic: 'PlayfairDisplay_900Black_Italic',
  },
};

const onestMap: Record<string, Record<string, string>> = {
  Thin: {
    Normal: 'Onest_100Thin',
    Italic: 'Onest_100Thin',
  },
  ExtraLight: {
    Normal: 'Onest_200ExtraLight',
    Italic: 'Onest_200ExtraLight',
  },
  Light: {
    Normal: 'Onest_300Light',
    Italic: 'Onest_300Light',
  },
  Regular: {
    Normal: 'Onest_400Regular',
    Italic: 'Onest_400Regular',
  },
  Medium: {
    Normal: 'Onest_500Medium',
    Italic: 'Onest_500Medium',
  },
  SemiBold: {
    Normal: 'Onest_600SemiBold',
    Italic: 'Onest_600SemiBold',
  },
  Bold: {
    Normal: 'Onest_700Bold',
    Italic: 'Onest_700Bold',
  },
  ExtraBold: {
    Normal: 'Onest_800ExtraBold',
    Italic: 'Onest_800ExtraBold',
  },
  Black: {
    Normal: 'Onest_900Black',
    Italic: 'Onest_900Black',
  },
};

const fontFamilyMap: Record<FontFamilyKey, Record<string, Record<string, string>>> = {
  PlayfairDisplay: playfairMap,
  Onest: onestMap,
};

export function resolveFontFamily(
  family: FontFamilyKey = 'Onest',
  weight: FontWeightKey = 'Regular',
  style: FontStyleKey = 'Normal'
): string {
  const familyRecord = fontFamilyMap[family];
  const weightRecord = familyRecord?.[weight];
  const resolved = weightRecord?.[style];

  if (!resolved) {
    const fallback = familyRecord?.Regular?.Normal ?? onestMap.Regular.Normal;
    if (__DEV__) {
      console.warn(
        `[fonts] Could not resolve font: ${family}/${weight}/${style}. ` +
          `Falling back to ${fallback}.`
      );
    }
    return fallback;
  }

  return resolved;
}

export const fontAssets = {
  Onest_100Thin,
  Onest_200ExtraLight,
  Onest_300Light,
  Onest_400Regular,
  Onest_500Medium,
  Onest_600SemiBold,
  Onest_700Bold,
  Onest_800ExtraBold,
  Onest_900Black,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black_Italic,
};
