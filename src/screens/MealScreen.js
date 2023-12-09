import { SafeAreaView, Text } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { Box, Center } from "native-base";

export default function MealScreen() {
  const [selected, setSelected] = useState("");

  return (
    <SafeAreaView>
      <Center style={{ margin: 20 }}>
        <Text style={{ fontSize: 25, padding: 10, fontWeight: "bold" }}>
          Meal Plan
        </Text>
      </Center>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "blue",
            selectedTextColor: "white",
          },
        }}
      />
      <Text style={{ fontWeight: "bold", paddingTop: 15 }}>Notes: </Text>
      <Box style={{ margin: 5 }}>
        <Text>
          * It's important to eat a variety of healthy foods from all food
          groups.
        </Text>
        <Text>
          * Make sure to stay hydrated by drinking plenty of water throughout
          the day.
        </Text>
        <Text>
          * Try to avoid processed foods and foods high in sugar, salt, and
          saturated fat.
        </Text>
        <Text>
          * Consult with a registered dietitian or nutritionist for a more
          personalized meal plan.
        </Text>
      </Box>
    </SafeAreaView>
  );
}
