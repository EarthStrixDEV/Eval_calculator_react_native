import { StyleSheet, Text, View } from "react-native";

import Screen from "./components/Screen";

export default function App() {
    return (
        <View style={styles.container}>
            <Screen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        height: "100%",
    },
});
