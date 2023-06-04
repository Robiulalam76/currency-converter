import React, { useState } from "react";

import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import AppScreen from "../../Utils/AppScreen";

import RouteHeader from "../../Utils/RouteHeader";
import { Button, Center, HStack, Image, ScrollView, Text, VStack } from "native-base";
import COLORS from "../../Utils/Constant";

const Notification = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <AppScreen>
      <RouteHeader title="Notification" />


      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >

        {/* <HStack mt={5} alignItems="center" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">
          Turn on notification
        </Text>
        <Switch
          trackColor={{ false: "#666", true: "#38E5C6" }}
          thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </HStack> */}


        <Center width={"full"} >
          <Text marginTop={10} style={{ fontSize: 24, color: "black", fontWeight: "bold" }} >You don’t have any notification</Text>
          <Text marginTop={2} style={{ alignItems: "center" }} >Notification allows you to be notified when a currency’s </Text>
          <Text> will increase or goes above or below a set value</Text>

        </Center>


        <VStack>

          <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
            <View display={'flex'} flexDirection={'row'} alignItems="center" justifyItems="center" >
              <Image
                borderRadius={100}
                source={require("../../assets/icons/notification.png")}
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 100,
                }}
                alt="logo"
              />
              <View marginLeft={8} width={250} >
                <Text bold fontSize="xl">Notify me when USD is increase</Text>
                <Text fontSize="sm">Date: 12-02-20223</Text>
              </View>

              <Image
                source={require("../../assets/icons/remove.png")}
                style={{
                  width: 20,
                  height: 25,
                }}
                alt="logo"
              />

            </View>

          </HStack>

          <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
            <View display={'flex'} flexDirection={'row'} alignItems="center" justifyItems="center" >
              <Image
                borderRadius={100}
                source={require("../../assets/icons/notification.png")}
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 100,
                }}
                alt="logo"
              />
              <View marginLeft={8} width={250} >
                <Text bold fontSize="xl">Notify me when USD is increase</Text>
                <Text fontSize="sm">Date: 12-02-20223</Text>
              </View>

              <Image
                source={require("../../assets/icons/remove.png")}
                style={{
                  width: 20,
                  height: 25,
                }}
                alt="logo"
              />

            </View>

          </HStack>

          <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
            <View display={'flex'} flexDirection={'row'} alignItems="center" justifyItems="center" >
              <Image
                borderRadius={100}
                source={require("../../assets/icons/notification.png")}
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 100,
                }}
                alt="logo"
              />
              <View marginLeft={8} width={250} >
                <Text bold fontSize="xl">Notify me when USD is increase</Text>
                <Text fontSize="sm">Date: 12-02-20223</Text>
              </View>

              <Image
                source={require("../../assets/icons/remove.png")}
                style={{
                  width: 20,
                  height: 25,
                }}
                alt="logo"
              />

            </View>

          </HStack>




        </VStack>






        <TouchableOpacity onPress={() => navigation.navigate("AddNotification")}>
          <HStack
            // onPress={() => navigation.navigate("Signin")}
            style={[styles.primary_btn]}
            display={"flex"} justifyContent={"center"}
          >
            <Image
              source={require("../../assets/icons/add.png")}
              style={{
                width: 20,
                height: 20,
              }}
              alt="logo"
            />
            <Text style={{
              fontSize: 18,
              color: "white",
              marginLeft: 16
            }} >Add New</Text>
          </HStack>
        </TouchableOpacity>


        {/* <VStack>
        <Text fontSize="lg" color={isEnabled ? "#000" : "#e6e6e6"}>
          Notification tone
        </Text>
        <Text fontSize="sm" color={isEnabled ? "#000" : "#e6e6e6"}>
          Default(signal)
        </Text>
      </VStack>

      <VStack mt={5}>
        <Text fontSize="lg" color={isEnabled ? "#000" : "#e6e6e6"}>
          Vibrate
        </Text>
        <Text fontSize="sm" color={isEnabled ? "#000" : "#e6e6e6"}>
          Default
        </Text>
      </VStack> */}

      </ScrollView>

    </AppScreen>
  );
};

export default Notification;

const styles = StyleSheet.create({
  primary_btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginTop: 40,
    paddingVertical: 30
  },
});
