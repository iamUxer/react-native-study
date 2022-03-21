import { Text, View, Button } from 'react-native';
import { RootStackScreenProps } from '../types';

export default function Tab1Screen({
  navigation,
}: RootStackScreenProps<'NotFound'>) {
  return (
    <View>
      <Button
        title="Tab1Detail"
        onPress={() => navigation.navigate('Tab1Detail')}
      />
    </View>
  );
}

export function Tab1Detail() {
  return (
    <View>
      <Text>Tab1Detail</Text>
    </View>
  );
}
