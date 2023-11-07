import { StyleSheet, Text, View, Image, Animated, ImageBackground, Button } from 'react-native';

export default function BaseLiquoresPage({ navigation: { navigate } }) {
    return (
        <View>
            <Text> Base Liquores Page </Text>

            <View style={styles.buttonCon}>
                {/* <Button title="Login" color='white' onPress={() => navigate('BaseLiquores')} /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

});