import Home from "./src/pages/Home";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import MainNavigation from "./src/navigation";

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MainNavigation/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
