import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import App from "../App"

// Light Mode Screens
import LiquoresPage from "../screens/light_mode/liquores_page"
import BaseLiquoresPage from "../screens/light_mode/base_liquores_page"
import MartinsPage from "../screens/light_mode/martins_page"
import LightModeMenu from "../screens/light_mode/light_mode_menu"

// Dark Mode Screens
// import LiquoresPage from "../screens/dark_mode/liquores_page"
// import BaseLiquoresPage from "../screens/dark_mode/base_liquores_page"
// import MartinsPage from "../screens/dark_mode/martins_page"
// import DarkModeMenu from "../screens/dark_mode/light_mode_menu"


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Liquores">
            {/* <Stack.Screen name="App" component={App} /> */}
            <Stack.Screen name="Liquores" component={LiquoresPage} />
            <Stack.Screen name="BaseLiquores" component={BaseLiquoresPage} />
            <Stack.Screen name="Martins" component={MartinsPage} />
            <Stack.Screen name="LightModeSwitch" component={LightModeMenu} />
        </Stack.Navigator>
    );
}

export default RootNavigator;