import { StyleSheet, Text, View, Image, Animated, ImageBackground, Button, ScrollView } from 'react-native';

export default function LiquoresPage({ navigation: { navigate } }) {
    return (
        <View>
            <View style={styles.headerCon}>
                <Text> BrewHub </Text>
            </View>

            <View style={styles.scrollViewCon}>
                <ScrollView horizontal={true}>

                    {/* Card One */}
                    <View style={styles.cardConOne}>
                        <Image 
                            source={require('../../assets/icon.png')}
                            style={styles.iconImage}
                            resizeMode='center'
                        />
                    </View>

                    {/* Card Two */}
                    <View style={styles.cardConTwo}>
                        
                    </View>

                    {/* Card Three */}
                    {/* <View style={styles.cardConThree}>
                        <Image 
                            source={require('')}
                            style={styles.iconImage}
                            // resizeMode=''
                        />
                    </View> */}
                    
                </ScrollView>
            </View>

            <View style={styles.buttonCon}>
                <Button title="BaseLiquores" color='black' onPress={() => navigate('BaseLiquores')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerCon: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "blue",
        marginVertical: 10,
        paddingVertical: 20,
    },
    scrollViewCon: {
        backgroundColor: "purple",
        paddingVertical: 20,
    },
    cardConOne: {
        maxHeight: 100,
        maxWidth: 50,
        paddingHorizontal: 100,
        paddingVertical: 100,
        justifyContent: "center",
    },
    iconImage: {
        maxWidth: 100,
    }
});