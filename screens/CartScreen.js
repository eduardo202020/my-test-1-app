import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme/index";
import { cartItems } from "../constants";

import FuitCard from "../components/fruitCardCart";

export default function CartScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 flex justify-between bg-orange-50">
      <View className="flex-row justify-start mx-5">
        <TouchableOpacity
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          className="border border-gray-50 rounded-xl"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={30} color="gray" />
        </TouchableOpacity>
      </View>

      <View className="mx-5 flex-1 ">
        <Text style={{ color: themeColors.text }} className="text-2xl py-10">
          Your <Text className="font-bold">cart</Text>
        </Text>
        <View>
          {cartItems.map((fruit, index) => (
            <FuitCard fruit={fruit} key={index} />
          ))}
        </View>
        <View className="flex-row justify-center mx-7">
          <TouchableOpacity
            className="p-3 flex-1 rounded-xl"
            style={{
              backgroundColor: "orange",
              opacity: 0.8,
              shadowColor: "orange",
              shadowRadius: 25,
            }}
          >
            <Text className="text-xl text-center text-white font-bold">
              Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
