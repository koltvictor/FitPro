import React, { useState } from "react";
import { Picker, Text, Button, Box, TextInput } from "native-base";

const QuestionsScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    "What is your name?",
    "What is your age?",
    "What is your sex?",
    "What is your weight?",
    "What is your body type?",
    "What is your current lifestyle?",
    "What is your fitness experience level?",
    "Do you have any dietary restrictions?",
    "What is your current diet like?",
    "What are your fitness goals?",
    "What is your motivation for achieving your fitness goals?",
  ];

  const lifestyleOptions = [
    "Very Active",
    "Pretty Active",
    "Somewhat Active",
    "Sporadically Active",
    "Not Active",
  ];

  const fitnessExperienceOptions = [
    "I work out multiple times a day",
    "I work out daily",
    "I work out 2-4 times a week",
    "I work out occasionally",
    "I rarely work out",
    "I never work out",
  ];

  const dietOptions = [
    "Super healthy and clean",
    "Mostly healthy and balanced",
    "Somewhat healthy",
    "Healthy sometimes",
    "I eat like white trash",
  ];

  return (
    <Box>
      {questions.map((question, index) => {
        return (
          <Box key={index}>
            <Text>{question}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default QuestionsScreen;
