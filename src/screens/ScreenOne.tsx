import { Button, Text, View } from "react-native";

export default function ScreenOne({navigation}:any) {
    return (
        <View>
            <Text>Screen Content</Text>
            <Button
                title="Goto Screen Two"
                onPress={() => {navigation.navigate('ScreenTwo')}} />
        </View>
    )
}