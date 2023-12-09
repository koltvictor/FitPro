import { Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Center } from "native-base";
import { Calendar } from "react-native-calendars";

export default function WorkoutScreen() {
  const [selected, setSelected] = useState("");
  return (
    <SafeAreaView>
      <Center style={{ margin: 20 }}>
        <Text style={{ fontSize: 25, padding: 10, fontWeight: "bold" }}>
          Fitness Plan
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
    </SafeAreaView>
  );
}
