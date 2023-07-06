import React, { useEffect, useState, useContext } from "react";
import { Text, Button, Box, Input, Radio, Center } from "native-base";
import { questions } from "../data/QuestionData";
import { SafeAreaView, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { db } from "../app/firebase/firebase";
import { UserContext } from "../contexts/userContext";
import { set } from "mobx";

const QuestionsScreen = ({ navigation }) => {
  const user = useContext(UserContext);
  const [name, setName] = useState("");
  const [motivation, setMotivation] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [fitnessExperienceLevel, setFitnessExperienceLevel] = useState("");
  const [currentDiet, setCurrentDiet] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  console.log("dietaryRestrictions", dietaryRestrictions);
  const [fitnessGoals, setFitnessGoals] = useState([]);

  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    renderQuestion();
  }, [questionIndex]);

  const handleSubmit = () => {
    db.collection("profiles")
      .doc(user.uid)
      .set({
        name: name,
        motivation: motivation,
        ageGroup: ageGroup,
        height: height,
        weight: weight,
        bodyType: bodyType,
        lifestyle: lifestyle,
        fitnessExperienceLevel: fitnessExperienceLevel,
        currentDiet: currentDiet,
        dietaryRestrictions: dietaryRestrictions,
        fitnessGoals: fitnessGoals,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const renderQuestion = () => {
    const question = questions[questionIndex];
    let inputField =
      question.type === "input" ? (
        <Input
          placeholder="Enter your answer here"
          onChangeText={(value) => {
            switch (question.name) {
              case "What is your name?":
                setName(value);
                break;
              case "What is your motivation for achieving your fitness goals?":
                setMotivation(value);
                break;
              case "What is your height?":
                setHeight(value);
                break;
              case "What is your weight in lbs?":
                setWeight(value);
                break;
              default:
                break;
            }
          }}
        />
      ) : (
        <Radio.Group defaultValue="1" accessibilityLabel="favorite colorscheme">
          {question.options.map((option, i) => (
            <Radio
              colorScheme="emerald"
              value={option}
              key={i}
              my={1}
              label={option}
              onPress={() => {
                if (question.name === "What is your age group?") {
                  setAgeGroup(option);
                } else if (question.name === "What is your body type?") {
                  setBodyType(option);
                } else if (
                  question.name === "What is your current lifestyle?"
                ) {
                  setLifestyle(option);
                } else if (
                  question.name === "What is your fitness experience level?"
                ) {
                  setFitnessExperienceLevel(option);
                } else if (
                  question.name === "What is your current diet like?"
                ) {
                  setCurrentDiet(option);
                }
              }}
            >
              {option}
            </Radio>
          ))}
        </Radio.Group>
      );
    if (question.type === "checkbox") {
      inputField = (
        <View>
          {question.options.map((option, i) => (
            <BouncyCheckbox
              key={i}
              value={option}
              onPress={(isChecked) => {
                if (question.name === "Do you have any dietary restrictions?") {
                  const newDietaryRestrictions = [
                    ...dietaryRestrictions,
                    option,
                  ];

                  const filteredDietaryRestrictions =
                    newDietaryRestrictions.filter(
                      (restriction) => restriction !== option
                    );

                  const uniqueValues = [
                    ...new Set(filteredDietaryRestrictions),
                  ];

                  const arrayToDeploy = isChecked
                    ? newDietaryRestrictions
                    : uniqueValues;

                  setDietaryRestrictions(arrayToDeploy);
                } else if (question.name === "What are your fitness goals?") {
                  const newFitnessGoals = [...fitnessGoals, option];

                  const filteredFitnessGoals = newFitnessGoals.filter(
                    (goal) => goal !== option
                  );

                  const uniqueValues = [...new Set(filteredFitnessGoals)];

                  const arrayToDeploy = isChecked
                    ? newFitnessGoals
                    : uniqueValues;

                  setFitnessGoals(arrayToDeploy);
                }
              }}
              text={option}
            />
          ))}
        </View>
      );
    }
    return (
      <SafeAreaView>
        <Center>
          <Box key={questionIndex} maxW="75%" maxH="100%" minW="75%">
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
                      navigation.navigate("Home");
                      handleSubmit();
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
        </Center>
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
