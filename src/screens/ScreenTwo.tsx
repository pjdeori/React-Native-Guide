import { Button, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function ScreenTwo({ navigation }: Props) {
  return (
    <View>
      <Text>Screen Content</Text>
      <Button
        title="Goto Screen One"
        onPress={() => navigation.navigate('ScreenOne')}
      />
    </View>
  );
}
