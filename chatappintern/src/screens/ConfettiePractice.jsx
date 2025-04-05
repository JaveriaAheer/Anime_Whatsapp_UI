import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ConfettiCannon from 'react-native-confetti-cannon';

export default function ConfettiPractice() {
    const [confettiActive, setConfettiActive] = useState(false);
    const [confettiKey, setConfettiKey] = useState(0);

    const startConfetti = () => {
        setConfettiActive(true);
        setConfettiKey(prevKey => prevKey + 1);  
    };

    return (
        <View style={styles.container}>
            {confettiActive && (
                <ConfettiCannon
                    key={confettiKey}  
                    count={200}
                    origin={{ x: -10, y: 0 }}
                    colors={["#FFA800", '#F8DBA3', '#162D3A']}
                    fadeOut={true}
                />
            )}
            <TouchableOpacity style={styles.button} onPress={startConfetti}>
                <Text style={styles.buttonText}>START</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#162D3A',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 15,
        marginTop: 15,
        width: '90%',
        marginLeft:0,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});