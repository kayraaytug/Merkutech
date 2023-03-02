import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#35BAFF',
        width: '75%',
        padding: 10,
        marginVertical:10,
        alignItems: 'center',
        borderRadius:5,
        marginTop:20,


    },
    text: {
        fontWeight:'bold',
        color: 'white',
    },
});
export default CustomButton;