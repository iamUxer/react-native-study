import { View, Button } from 'react-native';

export default function Modal1Screen({ navigation }: any) {
  return (
    <View>
      <Button title="Close Modal1" onPress={() => navigation.goBack()} />
    </View>
  );
}
