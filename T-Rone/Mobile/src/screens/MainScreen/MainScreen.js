import React, { PureComponent } from "react";
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Pressable } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from '../../components/CustomButton/CustomButton';
import BlinkIcon from '../../components/BlinkIcon/BlinkIcon';

const iconSize = 20;

export default class ProfileTabScreen extends PureComponent {
    constructor(props) {
        super(props);        
        this.state = {
            alerts: 0,
            battery: NaN,
            animal_alert: false,
            weed_alert: false,
        };
    }

    fetchData = async () => {
        try {
            const response = await fetch('https://25c1-2a02-4780-c-8254-00-1.eu.ngrok.io/data');
            const data = await response.json();
            this.setState({ battery: data.battery });
            this.setState({ alerts: data.alerts });
            this.setState({ weed_alert: data.weed_alert });
            this.setState({ animal_alert: data.animal_alert });
        } catch (error) {            
            // handle error here
        }
    };
    
    componentDidMount() {
        this.fetchData();
        this.interval = setInterval(() => this.fetchData(), 10000);
    }
      
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    _onWatchPressed = () => {
        this.props.navigation.navigate('VideoScreen');
    };
    
    _onNotificationPressed = () => {
      this.props.navigation.navigate('NotificationScreen');
    };
    
    render() {

        let Icon = this.state.alerts == 0 ? 
            <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-notifications"} /> : 
            <BlinkIcon style={styles.fabIcon} size={iconSize} name={"ios-notifications"} />

        const { battery } = this.state;
        let blink = battery <= 20 ? styles.blink : {};
        return (
            
            <View style={styles.container}>
                <StatusBar backgroundColor="#171717" barStyle="dark-content" />
                <View style={styles.topContainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#35BAFF", "#171717"]}
                        style={styles.gradientView}
                        pointerEvents="none"
                    />
                    <Text style={styles.title}>Furkan Kayra Aytuğ</Text>
                    <Text style={styles.email}>Premium Member</Text>
                    <TouchableOpacity style={styles.imageContainer} activeOpacity={0.8}>
                        <Image style={styles.image} source={require("../../../assets/profile-pic.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.itemView}>
                        <View style={styles.fab}>
                            <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-hardware-chip-sharp"} color="#171717" />
                        </View>
                        <View style={styles.textsView}>
                            <Text style={styles.textTitle}>Drone</Text>
                            <Text style={styles.textDescription}>MerkuTech T-Rone v2.7</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <View style={styles.fab}>
                            <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-battery-charging"} color="#171717" />
                        </View>
                        <View style={styles.textsView}>
                            <Text style={styles.textTitle}>Battery</Text>
                            <Text style={styles.textDescription}>%{this.state.battery}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.itemView}>
                        <View style={styles.fab}>
                            <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-call"} color="#171717" />
                        </View>
                        <View style={styles.textsView}>
                            <Text style={styles.textTitle}>Emergency Number</Text>
                            <Text style={styles.textDescription}>+1-9876543210</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <Pressable onPress={this._onNotificationPressed}>
                            <View style={styles.fab}>
                                {Icon}                                                      
                            </View>
                        </Pressable> 
                        <View style={styles.textsView}>
                            <Text style={styles.textTitle}>Notifications</Text>
                            <Text style={styles.textDescription}>{this.state.alerts} Possible Warnings</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <CustomButton text="Live Stream" onPress={this._onWatchPressed}/>
                    </View>                     
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#171717"
    },
        watch: {
        marginLeft: 50,

    },
    topContainer: {
        height: "32%",
        flexDirection: "column",
        marginTop: 50,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        marginTop: 70,
        marginLeft: 32
    },
    email: {
        fontSize: 14,
        fontWeight: "400",
        color: "white",
        marginLeft: 32
    },
    imageContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        position: "absolute",
        right: 32,
        top: 32
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        position: "absolute",
        borderColor: "rgba(255, 255, 255, 0.6)",
        borderWidth: 2
    },
    bottomContainer: {
        height: "66%",
    },
    gradientView: {
        height: "100%",
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        position: "absolute",
        top: -100,
        left: 0,
        right: 0,
        bottom: 0,
        transform: [{ rotate: "0deg" }]
    },
    fab: {
        width: 44,
        height: 44,
        borderRadius: 22,
        elevation: 4,
        backgroundColor: "#35BAFF",
        flexDirection: "column",
        justifyContent: "center"
    },
    fabIcon: {
        alignSelf: "center"
    },
    itemView: {
        flexDirection: "row",
        height: 78,
        alignItems: "center",
        marginLeft: 72
    },
    textsView: {
        marginLeft: 32,
        backgroundColor: "#171717"
    },
    textTitle: {
        fontSize: 12,
        color: "#A9A9A9"
    },
    textDescription: {
        color: "white",
        fontSize: 16
    },

});
