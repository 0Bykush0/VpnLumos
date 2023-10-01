/** @format */

import { View, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function PriceOption({ visible, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close-outline" size={23} color="gray" />
          </TouchableOpacity>
          <View style={styles.body}>
            <Text style={styles.headerText} variant="headlineLarge">
              Ücretsiz dene!
            </Text>
            <View style={styles.infoList}>
              <View style={styles.infoItem}>
                <Ionicons
                  name="md-checkmark-circle"
                  size={23}
                  color="#4AB461"
                />

                <Text style={styles.infoText} variant="titleMedium">
                  Tüm favori içeriğine eriş
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons
                  name="md-checkmark-circle"
                  size={23}
                  color="#4AB461"
                />
                <Text style={styles.infoText} variant="titleMedium">
                  Reklam yok, kesinti yok
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons
                  name="md-checkmark-circle"
                  size={23}
                  color="#4AB461"
                />
                <Text style={styles.infoText} variant="titleMedium">
                  Kayit tutmama politikası
                </Text>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity>
                <Card style={[styles.card, styles.populerCard]}>
                  <View style={styles.cardHeader}>
                    <Text style={{ fontWeight: "bold" }} variant="labelMedium">
                      1 ay
                    </Text>
                  </View>
                  <View style={styles.populer}>
                    <LinearGradient
                      style={styles.populerBox}
                      start={[0.1, 1]}
                      end={[1, 0.1]}
                      colors={["#4099EE", "#3F56EE"]}
                    >
                      <Text style={{ color: "white" }} variant="labelSmall">
                        POPÜLER
                      </Text>
                    </LinearGradient>
                  </View>
                  <View style={styles.cardBody}>
                    <Text
                      style={{ fontWeight: "bold" }}
                      variant="headlineMedium"
                    >
                      ₺144,99
                    </Text>
                    <Text variant="labelSmall">/ay</Text>
                  </View>
                  <Text
                    style={{ color: "gray", fontSize: 10 }}
                    variant="bodySmall"
                  >
                    3 gün ücretsiz, ardından ₺144,99/ay
                  </Text>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card style={styles.card}>
                  <View style={styles.cardHeader}>
                    <Text style={{ fontWeight: "bold" }} variant="labelMedium">
                      Ömür boyu erişim
                    </Text>
                  </View>
                  <View style={styles.cardBody}>
                    <Text
                      style={{ fontWeight: "bold" }}
                      variant="headlineMedium"
                    >
                      ₺1499,99
                    </Text>
                    <Text variant="labelSmall">/bir kez</Text>
                  </View>
                  <Text
                    style={{ color: "gray", fontSize: 10 }}
                    variant="bodySmall"
                  >
                    Ömür boyu
                  </Text>
                </Card>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalBody: {
    height: "70%",
    borderTopRightRadius: "25",
    borderTopLeftRadius: "25",
    backgroundColor: "white",
    paddingHorizontal: "6%",
    paddingVertical: "6%",
  },

  headerText: {
    fontWeight: "bold",
    paddingVertical: "7%",
  },

  infoItem: {
    flexDirection: "row",
    paddingVertical: "2%",
  },

  infoText: {
    paddingHorizontal: "3%",
  },

  cardContainer: {
    paddingVertical: "10%",
  },

  card: {
    marginVertical: "3%",
    padding: "2%",
    backgroundColor: "white",
  },

  cardHeader: {
    paddingVertical: "1%",
  },

  cardBody: {
    flexDirection: "row",
    alignItems: "baseline",
    paddingVertical: "1%",
  },

  populerCard: {
    backgroundColor: "#DEE3FB",
    borderWidth: 1,
    borderColor: "#4099EE",
  },

  populer: {
    left: "80%",
    bottom: "75%",
    position: "absolute",
  },

  populerBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 80,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
