import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "../../../assets/logo.png";
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onLoginPressed = () => {
    if (username=="merkutech" && password=="1234") {
      navigation.navigate('MainScreen');
      console.log(username, password);  
    }  
  };



  return (
    <View style={styles.root}>
      <Image 
      source={Logo} 
      style={[styles.logo, {height: height * 0.35}]} 
      resizeMode="contain" 
      />
      <Text style={styles.welcome}>
        Welcome to MERKUTECH Drone Control Application
      </Text>
      <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton text="Sign In" onPress={onLoginPressed}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor:"#171717"
  },
  logo: {
    marginBottom:30,
    width: '100%',
    height: '50%',

    //maxHeight: 500,
  },
  welcome: {
    marginTop: 10,
    marginBottom: 20,
    
    fontWeight:"bold",
    fontSize: 24,
    textAlign: "center",
    color:"white",
  },
});

export default LoginScreen;
