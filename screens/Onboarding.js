/** @format */

import React from "react";
import { useState } from "react";

import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Octicons } from "@expo/vector-icons";

import PriceOption from "./PriceOption";

export default function Onboarding({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView
      style={[styles.safeAreaView, modalVisible && { backgroundColor: "gray" }]}
    >
      <View style={styles.content}>
        <View id="header">
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={() => navigation.navigate("Vpn")}>
              <Ionicons name="close-outline" size={24} color="gray" />
            </TouchableOpacity>
            <Button textColor="gray">Geri Yükle</Button>
          </View>
          <View style={styles.header}>
            <Text variant="headlineMedium" style={{ fontWeight: "bold" }}>
              Ücretsiz denemen
            </Text>
            <Text variant="headlineMedium" style={{ fontWeight: "bold" }}>
              nasıl çalışır?
            </Text>
          </View>
        </View>
        <View id="body" style={styles.body}>
          <View style={styles.container}>
            <View style={styles.progressBar}>
              <View style={styles.progressBarText}>
                <Ionicons name="ios-lock-open" size={18} />
              </View>
              <View style={styles.progressBarText}>
                <Octicons name="bell-fill" size={18} />
              </View>
              <View style={styles.progressBarText}>
                <Ionicons name="star" size={18} color="#81CB30" />
              </View>
            </View>
            <View style={styles.textContainer}>
              <View>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                  Bugün
                </Text>
                <Text variant="bodySmall" style={{ color: "gray" }}>
                  Tüm özelliklere tam erşimini başlat
                </Text>
              </View>
              <View>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                  2. Gün
                </Text>
                <Text variant="bodySmall" style={{ color: "gray" }}>
                  Deneme süresinin ne zaman sona ereceği konusunda bir
                  hatirlatici al
                </Text>
              </View>
              <View>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                  3. Gün
                </Text>
                <Text variant="bodySmall" style={{ color: "gray" }}>
                  O gün size ücretlendirme yapılacak, herhangi bir zamanda
                  öncesinde iptal edebilirsiniz
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text variant="bodySmall">3-gün ücretsiz deneme, ardından</Text>
            <Text variant="bodySmall" style={{ fontWeight: "bold" }}>
              ₺1.499,99/yıl
            </Text>
          </View>
        </View>
        <View id="footer" style={styles.footer}>
          <LinearGradient
            style={styles.button}
            start={[0.1, 1]}
            end={[1, 0.1]}
            colors={["#4099EE", "#3F56EE"]}
          >
            <Button mode="text" onPress={() => navigation.navigate("Vpn")}>
              <Text variant="titleMedium" style={{ color: "white" }}>
                Dene 3-Gün Deneme
              </Text>
            </Button>
          </LinearGradient>
          <Button style={{ paddingTop: "3%" }} onPress={toggleModal}>
            <Text
              variant="titleSmall"
              style={{ color: "#4193ED", fontWeight: "bold" }}
            >
              Tüm planları görüntüle
            </Text>
          </Button>
          <PriceOption visible={modalVisible} onClose={toggleModal} />

          <View style={styles.policyContainer}>
            <Button>
              <Text style={{ color: "gray" }} variant="bodySmall">
                Kullanım Şartları
              </Text>
            </Button>
            <Button>
              <Text style={{ color: "gray" }} variant="bodySmall">
                Gizlilik Politikası
              </Text>
            </Button>
          </View>
        </View>
      </View>
      {modalVisible && (
        <BlurView style={styles.blurView} intensity={20} tint="dark" />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "transparent", // Ensure SafeAreaView is transparent
  },

  content: {
    flex: 1,
    marginHorizontal: 10,
    // Other styles for your content
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  header: {
    paddingTop: "10%",
    paddingBottom: "10%",
    alignItems: "center",
  },

  body: {
    paddingTop: 30,
    alignItems: "center",
  },

  container: {
    width: "100%",
    paddingLeft: "5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  progressBar: {
    height: 270,
    width: 50,
    paddingTop: 5,
    paddingBottom: 15,
    justifyContent: "space-between",
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    backgroundColor: "#4193ED",
  },

  progressBarText: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 45,
    width: 45,
    borderRadius: 23,
  },

  textContainer: {
    height: 270,
    width: 210,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },

  priceContainer: {
    paddingVertical: "15%",
    alignItems: "center",
  },

  footer: {
    alignItems: "center",
  },

  button: {
    width: "70%",
    borderRadius: "20%",
  },

  policyContainer: {
    flexDirection: "row",
    paddingVertical: "3%",
  },
});
