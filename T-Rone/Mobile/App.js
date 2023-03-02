import React, {Component} from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import PushNotification from 'react-native-push-notification';
import BackgroundFetch from "react-native-background-fetch";
import Navigation from './src/navigation';

//const App = () => {  working code
//  return (
//    <SafeAreaView style={styles.root}>
//      <Navigation />
//    </SafeAreaView>
//  );
//};

class App extends Component {
  
  componentDidMount() {
    BackgroundFetch.configure({
      minimumFetchInterval: 0.17, // fetch interval in minutes
      stopOnTerminate: false,
      startOnBoot: true,
      enableHeadless: true
    }, () => {
      console.log("BackgroundFetch initialized");
    }, (error) => {
      console.log("BackgroundFetch failed to initialize", error);
    });
  }

  componentWillUnmount() {
    BackgroundFetch.stop();
  }

  render() {
    
    return (
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
    );
  }
}

BackgroundFetch.registerHeadlessTask(async () => {
  console.log("[BackgroundFetch] Headless task started");
  try {
    const response = await fetch("https://25c1-2a02-4780-c-8254-00-1.eu.ngrok.io/data");
    const data = await response.json();
    if (data.animal_alert === true || data.weed_alert === true) {
      PushNotification.localNotification({
        title: "You farm is in danger!",
        message: "Check the application for more information"
      });
    }
  } catch (error) {
    console.error(error);
  }
  console.log("[BackgroundFetch] Headless task finished");
  BackgroundFetch.finish();
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#171717"
  },
  });

  export default App;