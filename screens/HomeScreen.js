import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../theme";

import { categories, featuredFruits } from "../constants";

import {
  Bars3CenterLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import { ScrollView } from "react-native";

import FruitCard from "../components/fruitCard";
import FruitCardSales from "../components/fruitCardSales";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Oranges");
  const navigation = useNavigation();

  return (
    <SafeAreaView className={"flex-1 bg-orange-50"}>
      {/* top bar */}

      <View className={"mx-5 flex-row justify-between items-center"}>
        <Bars3CenterLeftIcon size={30} color="black" />
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          className={"p-2 rounded-xl bg-orange-100"}
        >
          <ShoppingCartIcon size={25} color="orange" />
        </TouchableOpacity>
      </View>

      {/*  Categories  */}
      <View className="mt-4">
        <Text
          className="text-2xl tracking-widest font-medium ml-5"
          style={{ color: themeColors.text }}
        >
          Seasonal
        </Text>
        <Text
          className="text-3xl font-medium ml-5"
          style={{ color: themeColors.text }}
        >
          Fuites an Vegetables{" "}
        </Text>
        <ScrollView
          horizontal
          className="mt-8 px-5"
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category, index) => {
            let isActive = category == activeCategory;
            let textClass = `text-xl ${
              isActive
                ? "text-orange-500 font-bold border-b-[2px] border-orange-500"
                : ""
            }`;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveCategory(category)}
                className="mr-8 relative "
              >
                <Text className={textClass}>{category}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Fruits Carousel */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit, index) => (
            <FruitCard fruit={fruit} key={index} />
          ))}
        </ScrollView>
      </View>

      {/* hot sales */}
      <View className="mt-8 pl-5 space-y-1">
        <Text style={{ color: themeColors.text }} className="text-xl font-bold">
          Hot sales
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ overflow: "visible" }}
        >
          {[...featuredFruits].reverse().map((fruit, index) => (
            <FruitCardSales fruit={fruit} key={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
