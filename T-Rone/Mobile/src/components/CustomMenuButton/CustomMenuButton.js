import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomMenuButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',
        height: '30%',
        padding: 10,
        marginVertical:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        marginTop:20,
    },
    text: {
        fontWeight:'latin-medium',
        color: 'black',
        fontSize:20,

    },
});
export default CustomMenuButton;