import { StyleSheet, Text, View, Image, Animated, ImageBackground, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import Hamburger from 'hamburger-react'

export default function LiquoresPage({ navigation: { navigate } }) {
    
    // UseState for hamburger menu
    const [isOpen, setOpen] = useState(false)

    return (
        <View>
            <View style={styles.headerCon}>

                {/* logo header container */}
                <View style={styles.logoImgCon}> 
                    <Image 
                        source={require('../../assets/icon.png')}
                        style={styles.logoImage}
                        resizeMode='center'
                    />
                </View>
                
                {/* Hamburger Menu Icon */}
                <View style={styles.menuImgCon}> 
                    <Image 
                        source={require('../../assets/icon.png')}
                        style={styles.menuImage}
                        resizeMode='center'
                    />
                </View>
            </View>



            <View style={styles.scrollViewCon}>
                <ScrollView horizontal={true} style={{ flex: 1, paddingVertical: 30,}}>
                    
                    <View style={styles.iconCon}>

                        {/* Card One */}
                        <View style={styles.cardConOne}>
                            <Image 
                                source={require('../../assets/icon.png')}
                                style={styles.iconImage}
                                // resizeMode='center'
                            />
                        </View>

                        {/* Card Two */}
                        <View style={styles.cardConTwo}>
                            {/* <Image 
                                source={require('../../assets/icon.png')}
                                style={styles.iconImage}
                                resizeMode='center'
                            /> */}
                        </View>
                    </View>
                    
                </ScrollView>
            </View>


            <View style={styles.articleViewCon}>
                <ScrollView vertical={true}>

                    <View style={styles.articleConOne}>
                        <ImageBackground  style={styles.imageBackground} source={require('../../assets/icon.png')}>

                            <View style={styles.articleTextCon}>
                                <Text> Hello World </Text>
                            </View>
                        </ImageBackground>
                    </View>


                    <View style={styles.articleConOne}>
                        <ImageBackground  style={styles.imageBackground} source={require('../../assets/icon.png')}>

                            <View style={styles.articleTextCon}>
                                <Text> Hello World </Text>
                            </View>
                        </ImageBackground>
                    </View>
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
        justifyContent: "space-between",
        backgroundColor: "blue",
        marginVertical: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    scrollViewCon: {
        backgroundColor: "purple",
        paddingVertical: 80,
    },
    articleViewCon: {
        marginVertical: 20,
    },
    iconCon: {
        // paddingVertical:20,
        backgroundColor: "green",
    },
    cardConOne: {
        maxHeight: 100,
        // maxWidth: 50,
        paddingHorizontal: 40,
        // justifyContent: "center",
        // flex: 1,
    },
    menuCon: {

    },
    iconImage: {
        maxWidth: 100,
    },
    logoImage: {
        maxHeight: 30,
        maxWidth: 90,
    },
    logoImgCon: {
        // flexDirection: "row",
        // flex:1,
        maxHeight: 20,
        marginBottom: 10,
    },
    menuImage: {
        maxHeight: 30,
        maxWidth: 50,
    },
    menuImgCon: {
        maxHeight: 20,
        marginBottom: 10,
    },

    imageBackground: {
        marginVertical: 50,
    },
    articleConOne: {
        marginHorizontal: 20,
    },
    // articleConOne: {
    //     backgroundColor: "blue",
    //     // justifyContent: "center",
    //     marginVertical: 100,
    //     marginHorizontal: 30,
    // },
    // articleImgCon: {
    //     backgroundColor: "red",
    //     paddingVertical: 10,
    //     marginVertical: 100,
    //     justifyContent: "center",
    //     flexDirection: "row",
    // },
    // articleImage: {
    //     maxHeight: 100,
    //     maxWidth: 100,
    // },
    articleTextCon: {
        backgroundColor: "red",
        paddingVertical: 100,
        marginTop: 100,
    },
});