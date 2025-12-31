import { Button, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function ScreenOne({ navigation }: Props) {
  return (
    <View>
      <Text>Screen Content</Text>
      <Button
        title="Goto Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
    </View>
  );
}
