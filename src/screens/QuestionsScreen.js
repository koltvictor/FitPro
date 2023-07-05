import React, { useEffect, useState } from "react";
import { Text, Button, Box, Input, Radio, Center } from "native-base";
import { set } from "mobx";
import { SafeAreaView } from "react-native";

const QuestionsScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [name, setName] = useState("");
  const [motivation, setMotivation] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [fitnessExperienceLevel, setFitnessExperienceLevel] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [fitnessGoals, setFitnessGoals] = useState("");

  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    renderQuestion();
  }, [questionIndex]);

  const questions = [
    {
      index: 0,
      name: "What is your name?",
      type: "input",
    },
    {
      index: 1,
      name: "What is your motivation for achieving your fitness goals?",
      type: "input",
    },
    {
      index: 2,
      name: "What is your age group?",
      type: "radio",
      options: [
        "Under 18",
        "18-24",
        "25-34",
        "35-44",
        "45-54",
        "55-64",
        "65 or Above",
      ],
      accessibilityLabel:
        "This is a radio button for the question 'What is your age group?'",
    },
    {
      index: 3,
      name: "What is your height?",
      type: "input",
    },
    {
      index: 4,
      name: "What is your weight?",
      type: "input",
    },
    {
      index: 5,
      name: "What is your body type?",
      type: "radio",
      options: ["Ectomorph", "Mesomorph", "Endomorph"],
      accessibilityLabel:
        "This is a radio button for the question 'What is your body type?'",
    },
    {
      index: 6,
      name: "What is your current lifestyle?",
      type: "radio",
      options: [
        "Very Active",
        "Pretty Active",
        "Somewhat Active",
        "Sporadically Active",
        "Not Active",
      ],
      accessibilityLabel:
        "This is a radio button for the question 'What is your current lifestyle?'",
    },
    {
      index: 7,
      name: "What is your fitness experience level?",
      type: "radio",
      options: [
        "I work out multiple times a day",
        "I work out daily",
        "I work out 2-4 times a week",
        "I work out occasionally",
        "I rarely work out",
        "I never work out",
      ],
      accessibilityLabel:
        "This is a radio button for the question 'What is your fitness experience level?'",
    },
    {
      index: 8,
      name: "Do you have any dietary restrictions?",
      type: "radio",
      options: [
        "None",
        "Vegetarian",
        "Vegan",
        "Gluten Free",
        "Dairy Free",
        "Keto",
        "Paleo",
        "Pescatarian",
        "Other",
      ],
      accessibilityLabel:
        "This is a radio button for the question 'Do you have any dietary restrictions?'",
      type: "radio",
    },
  ];

  const renderQuestion = () => {
    const question = questions[questionIndex];
    const inputField =
      question.type === "input" ? (
        <Input
          placeholder="Enter your answer"
          onChange={(value) => {
            switch (question.name) {
              case "What is your name?":
                setName(value);
                break;
              case "What is your motivation for achieving your fitness goals?":
                setMotivation(value);
                break;
              default:
                break;
            }
          }}
        />
      ) : (
        <Radio.Group
          defaultValue="1"
          //   name="exampleGroup"
          accessibilityLabel="favorite colorscheme"
        >
          {question.options.map((option, i) => (
            <Radio
              colorScheme="emerald"
              value={option}
              key={i}
              my={1}
              label={option}
            >
              {option}
            </Radio>
          ))}
        </Radio.Group>
      );
    return (
      <SafeAreaView>
        <Box key={questionIndex}>
          <Text>{question.name}</Text>
          {inputField}
          <Center>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              padding="5px"
            >
              {questionIndex > 0 && (
                <Button
                  key={questionIndex - 1}
                  margin="10px"
                  onPress={() => {
                    setQuestionIndex(questionIndex - 1);
                    renderQuestion();
                  }}
                >
                  Back
                </Button>
              )}
              <Button
                key={questionIndex}
                margin="10px"
                onPress={() => {
                  if (questionIndex === questions.length - 1) {
                    return;
                  } else {
                    setQuestionIndex(questionIndex + 1);
                    renderQuestion();
                  }
                }}
              >
                {questionIndex === questions.length - 1
                  ? "Create Account"
                  : "Next"}
              </Button>
            </Box>
          </Center>
        </Box>
      </SafeAreaView>
    );
  };

  return (
    <Box>
      <Center h="80%">{renderQuestion()}</Center>
    </Box>
  );
};

export default QuestionsScreen;
