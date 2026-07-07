import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF6EE', alignItems: 'center', justifyContent: 'center' }}>
      <Text font={{ family: 'PlayfairDisplay', weight: 'Bold' }} style={{ fontSize: 24 }}>
        Profile
      </Text>
    </View>
  );
}
