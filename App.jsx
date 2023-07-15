import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const App = () => {
    const btn_number_calculator = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    const btn_symbol_calculator = ["AC", "+/-", "%"];
    const btn_operator_calculator = ["-", "+", "="];
    const [number, setNumber] = useState("0.0");
    function handleSetNumber(value) {
        if (value === "=") {
            calculate();
        } else {
            if (value === "AC") {
                setNumber("0.0");
            } else if (value === "+/-") {
                setNumber("-" + number);
            } else {
                setNumber(number + value);
            }
        }
    }
    function calculate() {
        try {
            setNumber(eval(number));
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.displayNumber}>
                <Text style={{ color: "white", fontSize: 60, fontWeight: 700 }}>
                    {number}
                </Text>
            </View>
            <View style={styles.grid_button}>
                {btn_symbol_calculator.map((btn, id) => (
                    <View style={{ alignSelf: "flex-start" }} key={id}>
                        <TouchableOpacity
                            style={styles.touchButton_symbol}
                            onPress={() => handleSetNumber(`${btn}`)}
                        >
                            <Text
                                style={{
                                    fontSize: 25,
                                    padding: 10,
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    color: "black",
                                }}
                            >
                                {btn}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
                {btn_number_calculator.map((btn, id) => (
                    <View style={{ alignSelf: "flex-start" }} key={id}>
                        <TouchableOpacity
                            style={styles.touchButton_number}
                            onPress={() => handleSetNumber(`${btn}`)}
                        >
                            <Text
                                style={{
                                    fontSize: 25,
                                    padding: 10,
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                {btn}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
                <View style={{ alignSelf: "flex-start" }}>
                    <TouchableOpacity
                        style={styles.touchButtonZero}
                        onPress={() => handleSetNumber("0")}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                padding: 10,
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            0
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: "flex-start" }}>
                    <TouchableOpacity
                        style={styles.touchButton_number}
                        onPress={() => handleSetNumber(".")}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                padding: 10,
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            .
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.grid_button_ope}>
                <View style={{ alignSelf: "flex-start" }}>
                    <TouchableOpacity
                        style={styles.touchButton_ope}
                        onPress={() => handleSetNumber(`/`)}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                padding: 10,
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            &#247;
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: "flex-start" }}>
                    <TouchableOpacity
                        style={styles.touchButton_ope}
                        onPress={() => handleSetNumber(`*`)}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                padding: 10,
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            &#215;
                        </Text>
                    </TouchableOpacity>
                </View>
                {btn_operator_calculator.map((btn, id) => (
                    <View style={{ alignSelf: "flex-start" }} key={id}>
                        <TouchableOpacity
                            style={styles.touchButton_ope}
                            onPress={() => handleSetNumber(`${btn}`)}
                        >
                            <Text
                                style={{
                                    fontSize: 25,
                                    padding: 10,
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                {btn}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 3,
        backgroundColor: "black",
        height: "100%",
    },
    grid_button: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: 320,
        height: "100%",
        padding: 7,
    },
    grid_button_ope: {
        flex: 1,
        position: "absolute",
        top: 306,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignSelf: "flex-end",
        width: 88,
    },
    touchButton_number: {
        borderRadius: 100,
        backgroundColor: "rgb(52,52,52)",
        color: "white",
        textAlign: "center",
        width: 60,
        height: 60,
        padding: 3,
        margin: 9.5,
    },
    touchButton_symbol: {
        borderRadius: 100,
        backgroundColor: "rgb(165,165,165)",
        color: "white",
        textAlign: "center",
        width: 60,
        height: 60,
        padding: 2,
        margin: 9.52,
    },
    touchButton_ope: {
        borderRadius: 100,
        backgroundColor: "rgb(251,159,11)",
        textAlign: "center",
        width: 60,
        height: 60,
        marginVertical: 9.6,
    },
    touchButtonZero: {
        borderRadius: 100,
        backgroundColor: "rgb(52,52,52)",
        color: "white",
        textAlign: "center",
        width: 180,
        height: 60,
        padding: 6,
        marginTop: 8,
    },
    displayNumber: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "100%",
        height: 300,
        paddingHorizontal: 20,
    },
});
export default App;

