import { View, Text, TouchableOpacity, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import StarRating from "react-native-star-rating";

export default function ProductScreen(props) {
  let fruit = props.route.params;
  const navigation = useNavigation();

  return (
    <View className={"flex-1"} style={{ backgroundColor: fruit.color }}>
      <SafeAreaView>
        <View className="flex-row justify-start mx-5">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full bg-white/40 flex flex-row justify-center items-center p-1"
          >
            <ChevronLeftIcon size={30} color={fruit.shadow} />
          </TouchableOpacity>
        </View>
        <View
          className="flex-row justify-center mt-5 pb-10 "
          style={{
            shadowColor: fruit.shadow,
            shadowRadius: 50,
            shadowOffset: { width: 0, height: 50 },
            shadowOpacity: 0.7,
          }}
        >
          <Image source={fruit.image} style={{ width: 290, height: 290 }} />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}
        className="bg-orange-50 flex-1 px-6 space-y-2 "
      >
        <Text
          style={{ color: themeColors.text }}
          className="mt-8 text-2xl font-bold"
        >
          {fruit.name}
        </Text>
        <View className="flex-row justify-between mb-3">
          <Text className="text-gray-500 font-semibold">{fruit.desc}</Text>
          <Text className="text-gray-500 font-semibold">
            Sold <Text className="text-gray-800 font-extrabold">239</Text>
          </Text>
        </View>
        <StarRating
          disabled={true}
          starSize={18}
          containerStyle={{ width: 120 }}
          maxStars={5}
          rating={fruit.stars}
          emptyStarColor="lightgray"
          fullStar={require("../assets/images/fullStar.png")}
        />
        <View style={{ height: 165 }}>
          <Text
            style={{ color: themeColors.text }}
            className="tracking-wider py-3"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque,
            voluptatibus harum libero distinctio, magni officia sint labore,
            explicabo provident sit voluptatum! Id, corporis voluptates labore
            quo vitae rerum saepe.
          </Text>

          <View className="flex-row justify-between items-center ">
            <Text className="text-3xl ">$ {fruit.price}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              className="text-3xl p-3 ml-6 flex-1 rounded-xl"
              style={{
                backgroundColor: fruit.shadow,
                opacity: 0.6,
                shadowColor: fruit.shadow,
                shadowRadius: 25,
                shadowOffset: { width: 0, height: 15 },
                shadowOpacity: 0.5,
              }}
            >
              <Text className="text-xl text-center text-white font-bold">
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
