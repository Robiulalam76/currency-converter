import { StyleSheet, TouchableOpacity } from "react-native";
import * as React from "react";
import { View, Button, Icon, Text, Box, Image, Modal, Pressable, Spinner, Heading } from "native-base";
import { Dimensions, SafeAreaView } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Utils/Constant";
import AppScreen from "../Utils/AppScreen";
import { Center, HStack, ScrollView, Square, VStack } from "native-base";
import { useEffect } from "react";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import DateTimePicker from '@react-native-community/datetimepicker';
import { currencyList } from "../Utils/CurrencyItem";
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'


export default function Analytics() {
  const screenWidth = Dimensions.get("window").width;
  const [period, setPeriod] = useState("");
  const [period1, setPeriod1] = useState([]);

  const [day, setDay] = useState("Day");
  const [date1, setDate1] = useState("7/15/2023");
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [openCurrency1, setOpenCurrency1] = useState(false);
  const [openCurrency2, setOpenCurrency2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCurrencyResult, setShowCurrencyResult] = useState(false);


  const handleCurrency = (data) => {
    if (openCurrency1) {
      setCurrency1(data)
      setOpenCurrency1(false)
    }
    if (openCurrency2) {
      setCurrency2(data)
      setOpenCurrency2(false)
    }
    if (currency1 && currency2) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setShowCurrencyResult(true)
      }, 5000);
    }
  }

  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };


  useEffect(() => { }, [period1, period]);
  return (
    <ScrollView>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          "rgba(170, 255, 251, 0.5)",
          "rgba(78, 67, 255, 0.87)",
          "rgba(137, 129, 254, 0.87)",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ]}
      >
        <Text bold mb={10} mt={2} fontSize="xl" textAlign="center"></Text>
        {/* <RouteHeader title="" /> */}
        <Center>
          <Text mb={5} style={styles.chartTitle}>
            {" "}
            Analytics
          </Text>
        </Center>


        <HStack
          justifyContent="space-between"
          alignContent="center"
          backgroundColor="#ffffff"
          borderRadius={30}
          mx={5}
        >
          <LinearGradient
            colors={day === "Day" ? ["#6456FF", "#2E20CA",] : ["#ffffff", "#ffffff"]}
            style={{ borderRadius: 20 }}
          >
            <Button onPress={() => setDay("Day")}
              backgroundColor={"transparent"}
              borderWidth={2}
              borderColor={"white"}
              borderRadius={20}
              px={10}>
              <Text color={day === "Day" ? "white" : "black"} >Day</Text>
            </Button>
          </LinearGradient>

          <LinearGradient
            colors={day === "7 Days" ? ["#6456FF", "#2E20CA",] : ["#ffffff", "#ffffff"]}
            style={{ borderRadius: 20 }}
          >
            <Button onPress={() => setDay("7 Days")}
              backgroundColor={"transparent"}
              borderWidth={2}
              borderColor={"white"}
              borderRadius={20}
              px={10}>
              <Text color={day === "7 Days" ? "white" : "black"}>7 Days</Text>
            </Button>
          </LinearGradient>

          <LinearGradient
            colors={day === "30 Days" ? ["#6456FF", "#2E20CA",] : ["#ffffff", "#ffffff"]}
            style={{ borderRadius: 20 }}
          >
            <Button onPress={() => setDay("30 Days")}
              backgroundColor={"transparent"}
              borderWidth={2}
              borderColor={"white"}
              borderRadius={20}
              px={5}>
              <Text color={day === "30 Days" ? "white" : "black"}>30 Days</Text>
            </Button>
          </LinearGradient>
        </HStack>

        <View mt={10} alignItems="center" >
          <LinearGradient
            colors={["#CCE7FF", "#F2FAFF", "#FFFFFF"]}
            style={{ borderRadius: 20 }}
          >
            <Button onPress={() => setShow(true)}
              borderRadius="20"
              backgroundColor="transparent"
              color={"white"}
              leftIcon={<Icon as={Ionicons}
                name="calendar" color="#6456FF"
                size="sm" />} endIcon={<Icon as={Ionicons} name="md-arrow-down-circle" color="#6456FF" size="sm" />}>
              <Text color="#6456FF">{date.toDateString()}</Text>
            </Button>
          </LinearGradient>
        </View>

        {
          show && <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        }




        <HStack alignItems={"center"} mx={6} my={10} >
          {
            showCurrencyResult ? <VStack>
              <Text color={"black"} fontWeight={"bold"} fontSize={24} >{date.toDateString()}</Text>
              <Text color={"black"} fontWeight={"bold"} fontSize={17} >$1 =  €0.83</Text>
            </VStack>
              :
              <>
                {
                  isLoading ? <HStack space={2} justifyContent="center" alignItems={"center"}>
                    <Spinner accessibilityLabel="Loading posts" />
                    <Heading color="primary.500" fontSize="md">
                      Loading
                    </Heading>
                  </HStack>
                    :
                    <>
                      <Pressable onPress={() => setOpenCurrency1(true)} >
                        <HStack alignItems={"center"} >
                          <Text bold fontSize="xl">
                            {
                              currency1 ? currency1 : "Add Currency"
                            }

                          </Text>
                          <Image source={require("../assets/icons/downSolid.png")}
                            width={4}
                            height={2}
                            ml={4}
                          />
                          {
                            currency1 && <Image source={require("../assets/icons/rightArrow.png")}
                              width={5}
                              height={3}
                              ml={2}
                            />
                          }
                        </HStack>
                      </Pressable>

                      <Pressable onPress={() => setOpenCurrency2(true)} ml={8} >
                        <HStack alignItems={"center"} >
                          <Text bold fontSize="xl">
                            {
                              currency2 ? currency2 : "Add Currency"
                            }
                          </Text>
                          <Image source={require("../assets/icons/downSolid.png")}
                            width={4}
                            height={2}
                            ml={4}
                          />
                        </HStack>
                      </Pressable>
                    </>
                }
              </>
          }
        </HStack>

        <AreaChart
          style={{ height: 300 }}
          data={data}
          contentInset={{ top: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: '#CCE7FF' }}
        >
          {/* <Grid /> */}
        </AreaChart>

      </LinearGradient>



      <Box
        height="300px"
        mt={10}
        backgroundColor="#6456FF"
        borderRadius={20}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          height="60px"
          width="50%"
          mt={10}
          backgroundColor="#000000"
          borderRadius={20}
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="md" px={5} color="#ffffff">
            Bezier Line Chart
          </Text>
          <Text fontSize="xs" px={5} py={0} color="#ffffff">
            Bezier Line Chart
          </Text>
        </Box>

        <HStack mt={4}>
          <Text fontSize="md" px={5} py={0} color="#ffffff">
            Close
          </Text>
          <Text fontSize="xs" px={5} py={0} color="#ffffff">
            --- ---- ---
          </Text>
        </HStack>
        <HStack mt={4}>
          <Text fontSize="md" px={5} py={0} color="#ffffff">
            Close
          </Text>
          <Text fontSize="xs" px={5} py={0} color="#ffffff">
            --- ---- ---
          </Text>
        </HStack>
        <HStack mt={4}>
          <Text fontSize="md" px={5} py={0} color="#ffffff">
            Close
          </Text>
          <Text fontSize="xs" px={5} py={0} color="#ffffff">
            --- ---- ---
          </Text>
        </HStack>
      </Box>



      <Modal isOpen={openCurrency1 || openCurrency2} onClose={() => setOpenCurrency1(false) || setOpenCurrency2(false)}>
        <Modal.Content width={350} maxWidth="400px" height={"full"} >

          <Modal.Header>Select Currency</Modal.Header>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Modal.Body >

              {
                currencyList?.map((crn, i) => (
                  <Pressable onPress={() => handleCurrency(crn?.name)} >
                    <View backgroundColor={"gray.100"} mb={2} height={10} justifyContent={"center"} px={5} >
                      <Text key={i} >{crn?.name}</Text>
                    </View>
                  </Pressable>
                ))
              }

            </Modal.Body>

          </ScrollView>

        </Modal.Content>
      </Modal>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  singleItem: {
    height: 80,
    backgroundColor: COLORS.purple,
    marginTop: 10,
  },
  chartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    padding: 10,
    // margin: 5,
    // height:'40%'
  },
  btn_common: {
    padding: 9,
    borderColor: "#9D9D9D",
    color: "#9D9D9D",
    fontSize: 12,
  },
  btn_left: {
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  btn_right: {
    borderWidth: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  btn_c: {
    marginTop: 20,
  },
  btn_day: {
    borderBottomWidth: 2,
    borderColor: "#000",
    color: "#000",
  },

});
