import { StyleSheet, Text, View, Image, Animated, ImageBackground, Button } from 'react-native';

export default function LiquoresPage({ navigation: { navigate } }) {
    return (
        <View>
            <Text> Liquores Page </Text>

            <View style={styles.buttonCon}>
                <Button title="BaseLiquores" color='black' onPress={() => navigate('BaseLiquores')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

});