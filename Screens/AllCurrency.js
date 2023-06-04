import {
  CheckIcon,
  FavouriteIcon,
  HStack,
  Text,
  Icon,
  Input,
  View,
  Box,
  Button,
  IconButton,
} from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, StatusBar } from "react-native";
import { ScrollView } from "native-base";
import RouteHeader from "../Utils/RouteHeader";

import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import SIngleCurrencyList from "../Components/AllCurrencyScreen/SIngleCurrencyList";
import COLORS from "../Utils/Constant";

function AllCurrency({ navigation }) {
  const [AllCurrency, setAllCurrency] = useState([1, 2]);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(170, 255, 251, 0.5)",
          "rgba(78, 67, 255, 0.87)",
          "rgba(137, 129, 254, 0.87)",
        ]}
      >
        <View style={styles.wrapper}>
          <Text bold mb={3} fontSize="xl" textAlign="center"></Text>
          {/* <RouteHeader title="Convert Currency" /> */}
          <Text bold mb={3} fontSize="xl" textAlign="center">
            Convert Currency
          </Text>
          <Box padding="20px">
            <SIngleCurrencyList navigation={navigation} />
          </Box>
          {/* <Text mt={2}></Text> */}

          <View style={{ margin: 10 }}></View>

          <View style={styles.converted}>
            <ScrollView>
              {/* All Favorites Currency showlist */}
              {AllCurrency.length > 0 &&
                AllCurrency.map((item, index) => (
                  <SIngleCurrencyList key={index} navigation={navigation} />
                ))}

              <Box alignItems="center">
                <Box width={180} justifyContent="center">
                  <Button
                    onPress={() => navigation.navigate("Currency_add")}
                    style={[styles.primary_btn]}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        color: "white",
                        fontWeight: "bold",
                        // backgroundColor: "#e6e6e6",
                      }}
                    >
                      <AntDesign name="pluscircleo" size={18} color="white" />
                      Add More
                    </Text>
                  </Button>
                </Box>
              </Box>
            </ScrollView>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default AllCurrency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },

  wrapper: {
    // backgroundColor: "#C0D8FC",
  },
  primary_btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    marginTop: 40,
    height: 50,
    borderColor: "#968ef4",
    borderWidth: 2,
    // padding: 10,
  },
  converted: {
    padding: 20,
    borderColor: "#000000",
    backgroundColor: "#eeeefd",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,

    height: "100%",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
});

const allData = [
  {
    name: "Euro",
    favoirite: "false",
    Credit: "80.4",
  },
  {
    name: "Bangladeshi Taka",
    favoirite: "false",
    Credit: "80.4",
  },
  {
    name: "Canadian Dollar",
    favoirite: "false",
    Credit: "80.4",
  },
  {
    name: "Australian Dollar",
    favoirite: "false",
    Credit: "80.4",
  },
  {
    name: "Argentina Peso",
    favoirite: "false",
    Credit: "80.4",
  },
  {
    name: "US Dollar",
    favoirite: "false",
    Credit: "80.4",
  },
];
