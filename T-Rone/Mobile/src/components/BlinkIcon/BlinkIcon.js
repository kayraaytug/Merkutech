import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BlinkIcon = () => {
  const [blinkValue, setBlinkValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(blinkValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [blinkValue]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.iconContainer,
          { opacity: blinkValue },
        ]}
      >
        <Icon name="ios-notifications" size={20} color="red" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ECF0F1",
    borderRadius: 22,

  },
  iconContainer: {
    backgroundColor: 'transparent',
  },
});

export default BlinkIcon;
