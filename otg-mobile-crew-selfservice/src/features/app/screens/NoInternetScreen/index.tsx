import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

// SERVICES //

// COMPONENTS //

// UTILS //

// PLUGINS //
import { NavigationProp } from "@react-navigation/native";

interface MainScreenProps {
  navigation: NavigationProp<any>;
}

const NoInternetScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Image
            resizeMode="contain"
            style={{ height: 100, width: 100 }}
            source={require("../../../../../assets/noonet.png")}
          ></Image>
          <Text style={[styles.activationTex, { fontSize: 36 }]}>
            No Internet !
          </Text>
          <Text style={{ fontSize: 16, color: "#333333", fontWeight: "400" }}>
            You need to have internet access to use this Application.
          </Text>

          <TouchableOpacity style={styles.enterAppView}>
            <Text style={styles.enterAppText}>Refresh</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoView}>
          <Image
            resizeMode="contain"
            style={styles.logoImage}
            source={require("../../../../assets/compas-logo.png")}
          ></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoInternetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 10,
  },
  textContainer: { flex: 1, paddingTop: 30 },
  activationTex: { color: "#333333", fontSize: 26, fontWeight: "700" },
  subText: { fontSize: 14, color: "#333333", fontWeight: "400" },
  textInputStyle: {
    borderColor: "#858585",
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    color: "#D1D1D1",
    height: 50,
    marginTop: 20,
    padding: 10,
  },
  enterAppView: {
    marginTop: 20,
    height: "15%",
    width: "100%",
    backgroundColor: "#281D60",
    // backgroundColor: "pink",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: "50%",
  },
  enterAppText: { color: "#FFFFFF", fontSize: 18, fontWeight: "500" },
  logoView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoImage: { height: "40%", width: "40%" },
});
