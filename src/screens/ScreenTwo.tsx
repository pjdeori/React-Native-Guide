import { Button, Text, View } from "react-native";

export default function ScreenTwo({navigation}:any) {
    return (
        <View>
            <Text>Screen Content</Text>
            <Button
                title="Goto Screen One"
                onPress={() => {navigation.navigate('ScreenOne')}} />
        </View>
    )
}