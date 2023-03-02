import React, {Component} from 'react';
import { Text , View, StyleSheet} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import YouTubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';

class MainScreen extends Component {
  render() {
    return (
      <View>
        <YouTubePlayer
          videoId={"5J4n69u1WeU"}
          play={true}
          height={300} 
          style={styles.videoPlayer}
        />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayer: {
    alignSelf: 'stretch',
    height: 300,
  },
});

export default MainScreen;
