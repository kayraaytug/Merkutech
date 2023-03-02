import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
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
            datetime: "asdad",
        };
    }

    componentDidMount() {
        this.fetchData();
        this.interval = setInterval(() => this.fetchData(), 10000);
      }
      
    componentWillUnmount() {
        this.fetchData();
        clearInterval(this.interval);
    }

    fetchData = async () => {
        try {
            const response = await fetch('https://25c1-2a02-4780-c-8254-00-1.eu.ngrok.io/data');
            const data = await response.json();
            this.setState({ battery: data.battery });
            this.setState({ alerts: data.alerts });
            this.setState({ weed_alert: data.weed_alert });
            this.setState({ animal_alert: data.animal_alert });
            this.setState({ datetime: data.datetime });
        } catch (error) {
            
            // handle error here
        }
    };

    render() {
        let Icon = this.state.alerts == 0 ? 
            <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-notifications"} /> : 
            <BlinkIcon style={styles.fabIcon} size={iconSize} name={"ios-notifications"} />
        
        let animal_alert = this.state.animal_alert == false ?
        <View style={styles.itemView}>
            <View style={styles.fab}>
                <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-checkmark-circle"} color="#FFFFFF" />
            </View>
            <View style={styles.textsView}>
                <Text style={styles.textDescription}>No animal warnings</Text>
            </View>
        </View>
            :
            <View style={styles.itemView}>
                <View style={styles.fab} backgroundColor = "red">
                    <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-warning-outline"} color="#FFFFFF" />
                </View>
                <View style={styles.textsView}>
                    <Text style={styles.textDescription}>Possible animal warning</Text>
                    <Text style={styles.textTitle}>Animal found in area</Text>
                    <Text style={styles.textTitle}>{this.state.datetime}</Text>
                </View>
            </View>
        
        let weed_alert = this.state.weed_alert == false ?
            
        <View style={styles.itemView}>
            <View style={styles.fab}>
                <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-checkmark-circle"} color="#FFFFFF" />
            </View>
            <View style={styles.textsView}>
                <Text style={styles.textDescription}>No plant warnings</Text>
            </View>
        </View>
            :
            <View style={styles.itemView}>
                <View style={styles.fab} backgroundColor = "red">
                    <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-warning-outline"} color="#FFFFFF" />
                </View>
                <View style={styles.textsView}>
                    <Text style={styles.textDescription}>Possible plant warning</Text>
                    <Text style={styles.textTitle}>Plant health in danger</Text>
                    <Text style={styles.textTitle}>{this.state.datetime}</Text>
                </View>
            </View>

        const { battery } = this.state;
        let blink = battery <= 20 ? styles.blink : {};

        return (     
            <View style={styles.container}>               
                <Text style={styles.title}>Notifications</Text>
                <View style={styles.bottomContainer}>
                    <View style={styles.itemView}> 
                        {animal_alert}                        
                    </View>   
                    <View style={styles.itemView}>
                        {weed_alert}     
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
    notificationContainer: {
        height: "20%",
        flexDirection: "column",
        marginTop: 50,
    },
    notificationtitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
        marginLeft: 32
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
        backgroundColor: "green",
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
        marginLeft: 26
    },
    textsView: {
        marginLeft: 12,
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
