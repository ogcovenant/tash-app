import { Logo } from '@/components/ui/logo';
import { Text } from '@/components/ui/text';
import { Bell } from 'lucide-react-native';
import { Image, Pressable, View } from 'react-native';

export function DashboardHeader() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?u=timi' }}
          style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: '#E8D6C8' }}
        />
        <View>
          <Text font={{ family: 'Onest' }} style={{ fontSize: 14, color: '#A94E2C' }}>
            Good morning,
          </Text>
          <Text font={{ family: 'PlayfairDisplay', weight: 'Bold' }} style={{ fontSize: 20, color: '#1F1714' }}>
            Timi
          </Text>
        </View>
      </View>

      <Pressable
        style={{
          width: 86,
          height: 44,
          borderRadius: 22,
          backgroundColor: '#FFF6EE',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 8,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#E8D6C8',
        }}
      >
        <Logo size={26} />
        <Bell color="#1F1714" size={20} />
      </Pressable>
    </View>
  );
}
