import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppRoutes from "../routes/AppRoutes";

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <AppRoutes />
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
} 