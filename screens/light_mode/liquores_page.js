import { StyleSheet, Text, View, Image, Animated, ImageBackground, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import Hamburger from 'hamburger-react'

export default function LiquoresPage({ navigation: { navigate } }) {
    
    // UseState for hamburger menu
    // const [isOpen, setOpen] = useState(false)

    return (
        <View>
            <View style={styles.headerCon}>

                {/* logo header container */}
                <View style={styles.logoImgCon}> 
                    <Image 
                        // source={require('../../assets/icon.png')}
                        // style={styles.logoImage}
                        // resizeMode='center'
                    />
                </View>

                {/* Header Text */}
                <Text> BrewHub </Text>

                {/* Hamburger Menu Icon
                <View style={styles.menuCon}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </View> */}
            </View>

            <View style={styles.scrollViewCon}>
                <ScrollView horizontal={true} style={{flex:1, paddingVertical: 70,}}>

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
                        <Image 
                            source={require('../../assets/icon.png')}
                            style={styles.iconImage}
                            resizeMode='center'
                        />
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
    menuCon: {

    },
    iconImage: {
        maxWidth: 100,
    },
    logoImgCon: {
        // flexDirection: "row",
        // flex:1,
        // maxHeight: 100,
    },
});