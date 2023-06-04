import React from 'react';
import { ScrollView, HStack, Box, Image, Text, Button, Icon, Flex, VStack } from 'native-base';
import COLORS from '../../Utils/Constant';
import { Ionicons } from "@expo/vector-icons";
import { LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape'

const dataArray = [
    {
        name: "Alex Rutuynos",
        value: 0.005,
        currency: "¥129.89",
        data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
    },
    {
        name: "John Doe",
        value: 0.03,
        currency: "¥150.23",
        data: [20, -10, 30, 80, -14, -34, 65, 81, 45, 33, -43, 34, 55, -10, -70],
    },
    {
        name: "Jane Smith",
        value: -0.02,
        currency: "¥100.50",
        data: [40, -20, 10, 65, -14, -24, 75, 71, 25, 43, -23, 14, 35, -30, -60],
    },
    {
        name: "Sarah Johnson",
        value: 0.01,
        currency: "¥75.45",
        data: [70, 30, 60, 15, -14, -44, 95, 81, 35, 23, -33, 44, 65, -40, -90],
    },
    {
        name: "Michael Brown",
        value: 0.015,
        currency: "¥200.00",
        data: [10, -30, 20, 45, -24, -14, 55, 61, 15, 23, -43, 24, 45, -10, -50],
    },
    {
        name: "Emily Davis",
        value: -0.01,
        currency: "¥90.75",
        data: [30, -10, 50, 75, -34, -44, 35, 51, 15, 43, -13, 44, 65, -20, -70],
    },
    {
        name: "David Wilson",
        value: 0.008,
        currency: "¥180.25",
        data: [80, 50, 70, 25, -24, -14, 75, 61, 45, 13, -33, 14, 55, -30, -80],
    },
    {
        name: "Olivia Thompson",
        value: 0.025,
        currency: "¥120.90",
        data: [90, 40, 80, 35, -34, -24, 85, 91, 55, 33, -23, 34, 75, -10, -60],
    },
    {
        name: "James Anderson",
        value: -0.015,
        currency: "¥250.50",
        data: [60, 20, 50, 95, -44, -54, 75, 61, 35, 53, -53, 44, 65, -30, -80],
    },
    {
        name: "Sophia Clark",
        value: 0.02,
        currency: "¥300.75",
        data: [50, -20, 40, 85, -24, -14, 95, 91, 55, 23, -43, 14, 55, -20, -70],
    },
];


const Cards = () => {

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} marginBottom={5} >
            {dataArray.map((item, index) => (
                <Box
                    key={index}
                    bg="white"
                    rounded="2xl"
                    width={260}
                    height={280}
                    mr={5}
                    overflow="hidden"
                >
                    <Box flex={8} backgroundColor="#2E20CA" alignItems={'center'} paddingTop={4}>
                        <Button
                            width={98}
                            height={38}
                            backgroundColor="#232631B8"
                            text
                            mt={2}
                            borderRadius={30}
                            p={1}
                            px={2}
                            variant="subtle"
                            endIcon={
                                <Icon as={Ionicons} name="cloud-download-outline" size="sm" color="white" />
                            }
                        >
                            <Text color="white">{item.value.toFixed(3)}</Text>
                        </Button>

                        <LineChart
                            style={{ height: 140, width: 250, padding: 20 }}
                            data={item.data}
                            svg={{ stroke: '#ffffff' }}
                            animate={true}
                            animationDuration={5}
                            curve={shape.curveNatural}
                        >
                        </LineChart>
                    </Box>

                    <Box flex={4} backgroundColor="#232631">
                        <Flex direction='row' justifyContent="space-around" paddingTop={4}>
                            <VStack space={1}>
                                <Text bold fontSize="xl" color={'white'}>{item.name}</Text>
                                <Text fontSize="sm" color={'white'}>{item.value.toFixed(2)}</Text>
                            </VStack>
                            <Button
                                width={98}
                                height={38}
                                backgroundColor="rgba(255, 255, 255, 0.05)"
                                text
                                mt={2}
                                borderRadius={30}
                                p={1}
                                px={2}
                                variant="subtle"
                            >
                                <Text color="white">{item.currency}</Text>
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            ))}

        </ScrollView>
    );
};

export default Cards;
