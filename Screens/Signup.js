import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import AppScreen from "../Utils/AppScreen";
import { Button, Center, Flex, Image, VStack } from "native-base";
import COLORS from "../Utils/Constant";
import { primaryGrad } from "../Utils/GradientColor";

import { LinearGradient } from "expo-linear-gradient";

// import LinearGradient from 'expo-linear-gradient'; // import LinearGradient

const Signup = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [reTypePassword, setReTypePassword] = React.useState("");

  const [username, setUsername] = React.useState("");
  // const [password, setPassword] = useState('');

  const submitHandler = async () => {
    try {
      const response = await fetch("http://api.qwixk.com/coin-alter/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Sign-in successful
        const data = await response.json();
        // Do something with the response data
        console.log(data);
        navigation.navigate("signin");
      } else {
        // Sign-in failed
        const errorData = await response.json();
        // Handle the error
        console.log(errorData);
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
    }

    navigation.navigate("Home");
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
        > */}

        <LinearGradient
          // Button Linear Gradient
          colors={primaryGrad}
          style={{
            paddingTop: 50,
          }}
        >
          <View>
            <Center>
              <Image
                borderRadius={100}
                source={require("../assets/logo/logo.png")}
                style={{
                  width: 99,
                  height: 99,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "white",
                  padding: 20,
                  marginTop: 20,
                }}
                alt="logo"
              />
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  marginTop: 6,
                }}
              >
                Sign Up
              </Text>
              <Text
                style={[
                  styles.title_margin_Secondery,
                  styles.main_Font_secondary,
                ]}
              >
                Open your account
              </Text>
            </Center>
          </View>
        </LinearGradient>
        <View style={styles.container}>
          <View style={styles.container_Input}>
            <TextInput
              style={[
                {
                  backgroundColor: "white",
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  placeholderTextColor: "gray",
                },
                styles.input,
              ]}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Email Address"
            />
            <TextInput
              style={[
                {
                  backgroundColor: "white",
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  marginTop: 16,
                  placeholderTextColor: "gray",
                },
                styles.input,
              ]}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
            />
            <TextInput
              style={[
                {
                  backgroundColor: "white",
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  marginTop: 16,
                  placeholderTextColor: "gray",
                },
                styles.input,
              ]}
              onChangeText={(text) => setReTypePassword(text)}
              value={reTypePassword}
              placeholder="Re-type Password"
            />

            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Button
                onPress={() => submitHandler()}
                style={[styles.primary_btn]}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  Sign Up
                </Text>
              </Button>
            </TouchableOpacity>

            <VStack space={10} alignItems="center" marginTop={5}>
              <Text
                style={[
                  styles.title_margin_Secondery,
                  styles.main_Font_secondary,
                ]}
              >
                Or sign in with
              </Text>

              <Flex
                direction="row"
                width={"full"}
                padding={3}
                bgColor={"white"}
                rounded={6}
                style={{
                  display: "flex",
                  // justifyContent: "center"
                }}
              >
                <Image
                  borderRadius={100}
                  source={require("../assets/icons/google.png")}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 6,
                  }}
                  alt="logo"
                />

                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    marginLeft: 90,
                  }}
                >
                  Google
                </Text>
              </Flex>
            </VStack>

            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[styles.signContainer, styles.primaryText]}
            >
              <Text style={[styles.main_Font_secondary1]}>
                Already have an account?
              </Text>
              <Text
                style={[styles.main_Font_secondary, styles.main_Font_signup]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* </LinearGradient> */}
      </ScrollView>
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    // width: "96%",
    // alignSelf: "center",
    // marginBottom: 100,
  },
  main_title: {
    marginTop: 99,
  },
  main_titleSecondery: {
    marginTop: 60,
  },
  title_margin_Secondery: {
    marginTop: 16,
  },
  main_Font: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  main_Font_secondary: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9D9D9D",
  },
  main_Font_align: { textAlign: "center" },
  main_Font_Signup: { textAlign: "center" },
  container_Input: {
    marginTop: 30,
    marginHorizontal: 30,
    // marginLeft: 20,
  },

  input: {
    borderWidth: 0,
    height: 50,
    paddingHorizontal: 20,
    fontSize: 14,

    borderColor: "#D9D9D9",
    borderWidth: 1,

    borderRadius: 10,
  },
  primary_btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginTop: 40,
    height: 50,
  },
  main_Font_signup: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  signContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  main_Font_secondary1: {
    color: "#000",
    marginRight: 10,
  },
});
