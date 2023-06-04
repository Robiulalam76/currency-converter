import React, { useState } from "react";

import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import AppScreen from "../../../Utils/AppScreen";

import RouteHeader from "../../../Utils/RouteHeader";
import { FormControl, Select, Box, Center, HStack, Image, ScrollView, Text, VStack, Divider, Flex } from "native-base";
import COLORS from "../../../Utils/Constant";

const AddNotification = ({ navigation }) => {


    return (
        <AppScreen>
            <RouteHeader title="Add Notification" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >

                <Center width={"full"} >
                    <Text marginTop={10} style={{ fontSize: 24, color: "black", fontWeight: "bold" }} >Notify me when</Text>
                </Center>

                <HStack width={165} marginTop={3} >

                    <Center width={"full"} marginRight={3} justifyContent="space-between" justifyItems={"center"} backgroundColor="white" paddingX={3} paddingY={6} borderRadius={10}  >
                        <Text fontWeight={"bold"} fontSize={17} style={styles.title}>Is increase</Text>
                    </Center>

                    <Center width={"full"} marginLeft={3} justifyContent="space-between" justifyItems={"center"} backgroundColor="white" paddingX={3} paddingY={6} borderRadius={10}  >
                        <Text fontWeight={"bold"} fontSize={17} style={styles.title}>Is decrease</Text>
                    </Center>

                </HStack>

                <TouchableOpacity >
                    <HStack
                        style={[styles.primary_btn]}
                        display={"flex"} justifyContent={"center"}
                    >
                        <Text style={{
                            fontSize: 18,
                            color: "white",
                        }} >Add Notification</Text>
                    </HStack>
                </TouchableOpacity>



                <Box alignItems="center" marginTop={3} >
                    <Flex direction="row" alignItems={"center"} justifyItems={"center"} >

                        <Divider _light={{
                            bg: "#CFCBFB"
                        }} />

                        <Box
                            borderRadius="full"
                            bg="white"
                            width={10}
                            height={10}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Text color="#2E20CA" fontWeight="bold" fontSize={12}>
                                OR
                            </Text>
                        </Box>

                        <Divider _light={{
                            bg: "#CFCBFB"
                        }} />

                    </Flex>
                </Box>



                <HStack width={165} marginTop={3} >

                    <Center width={"full"} marginRight={3} justifyContent="space-between" justifyItems={"center"} backgroundColor="white" paddingX={3} paddingY={6} borderRadius={10}  >
                        <Text fontWeight={"bold"} fontSize={17} style={styles.title}>Is more than</Text>
                    </Center>

                    <Center width={"full"} marginLeft={3} justifyContent="space-between" justifyItems={"center"} backgroundColor="white" paddingX={3} paddingY={6} borderRadius={10}  >
                        <Text fontWeight={"bold"} fontSize={17} style={styles.title}>Is less than</Text>
                    </Center>

                </HStack>


                <TouchableOpacity >
                    <HStack
                        style={[styles.primary_btn]}
                        display={"flex"} justifyContent={"center"}
                    >
                        <Text style={{
                            fontSize: 18,
                            color: "white",
                        }} >Add Notification</Text>
                    </HStack>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("CustomNotification")} >
                    <HStack
                        style={[styles.primary_btn]}
                        display={"flex"} justifyContent={"center"}
                    >
                        <Text style={{
                            fontSize: 18,
                            color: "white",
                        }} >View Custom Notification</Text>
                    </HStack>
                </TouchableOpacity>


            </ScrollView>

        </AppScreen >
    );
};

export default AddNotification;

const styles = StyleSheet.create({
    primary_btn: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        marginTop: 20,
        paddingVertical: 30
    },
});
