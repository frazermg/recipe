import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // takes you back to the item at the top of the stack
          navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailsScreen;
