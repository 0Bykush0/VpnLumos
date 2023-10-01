/** @format */

import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Vpn({ navigation }) {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [resetFlag, setResetFlag] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSwitchToggle = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);

    // If stopped, enable the reset flag
    if (isRunning) {
      setResetFlag(true);
    } else if (resetFlag) {
      setElapsedTime(0);
      setResetFlag(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.headerBar}>
          <Button textColor="#4099EE">VPN Nedir?</Button>
          <View style={styles.headerBarRight}>
            <LinearGradient
              style={styles.proButton}
              start={[0.1, 1]}
              end={[1, 0.1]}
              colors={["#1869F6", "#1DA9F7"]}
            >
              <Button>
                <Text variant="bodySmall" style={{ color: "white" }}>
                  PRO
                </Text>
              </Button>
            </LinearGradient>
            <Button>ayar</Button>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.timer}>
            <Text variant="bodyLarge" style={{ color: "gray" }}>
              Etkin Süre
            </Text>
            <Text variant="headlineMedium" style={{ fontWeight: "600" }}>
              {formatTime(elapsedTime)}
            </Text>
          </View>
          <TouchableOpacity style={styles.serverButton}>
            <Text variant="bodyLarge" style={{ fontWeight: "600" }}>
              En Hızlı Sunucu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "White",
  },

  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "1%",
  },

  headerBarRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  proButton: {
    borderRadius: "100%",
    width: 60,
    height: 30,
  },

  body: {
    paddingHorizontal: "10%",
    paddingVertical: "5%",
  },

  timer: {
    paddingBottom: "5%",
  },

  serverButton: {
    height: 45,
    borderColor: "#DCE5F9",
    borderWidth: 2,
    borderRadius: "100%",
    justifyContent: "center",
  },
});
