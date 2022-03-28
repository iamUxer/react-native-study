import { Text, View, Button } from 'react-native';

export default function Tab2Screen({ navigation }: any) {
  return (
    <View>
      <Text>
        <Button
          title="Open Modal1"
          onPress={() => navigation.navigate('Modal1')}
        />
      </Text>
    </View>
  );
}
