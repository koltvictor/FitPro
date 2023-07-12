import React, { useEffect, useState, useContext } from "react";
import { Text, Button, Box, Input, Radio, Center } from "native-base";
import { questions } from "../data/QuestionData";
import { SafeAreaView, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Picker } from "@react-native-picker/picker";
import { db, doc, getDoc, updateDoc } from "../app/firebase/firebase";
import { UserContext } from "../contexts/userContext";
import userStore from "../stores/userStore";

const QuestionsScreen = ({ navigation }) => {
  const user = useContext(UserContext);
  const [name, setName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [fitnessExperienceLevel, setFitnessExperienceLevel] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [currentDiet, setCurrentDiet] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [fitnessGoals, setFitnessGoals] = useState([]);
  const [timeline, setTimeline] = useState("");
  const [dailyAllotment, setDailyAllotment] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [currentFitnessLevel, setCurrentFitnessLevel] = useState("");

  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    renderQuestion();
  }, [questionIndex]);

  const renderQuestion = () => {
    const question = questions[questionIndex];
    let inputField =
      question.type === "input" ? (
        <Input
          placeholder="Enter your answer here"
          onChangeText={(text) => {
            switch (question.name) {
              case "What is your name?":
                setName(text);
                break;
              case "What is your motivation for achieving your fitness goals?":
                setMotivation(text);
                break;
              default:
                break;
            }
            return;
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
                  question.name === "What is your current fitness level?"
                ) {
                  setCurrentFitnessLevel(option);
                } else if (
                  question.name === "What is your fitness experience level?"
                ) {
                  setFitnessExperienceLevel(option);
                } else if (
                  question.name === "What is your current diet like?"
                ) {
                  setCurrentDiet(option);
                } else if (
                  question.name === "What is your fitness goal timeline?"
                ) {
                  setTimeline(option);
                } else if (
                  question.name ===
                  "How much time do you have to dedicate to working out in a day?"
                ) {
                  setDailyAllotment(option);
                } else if (
                  question.name-- -
                  "Do you have any injuries, any allergies, any health conditions, or any other information you would like to share?  Are there any workouts you  prefer (i.e. HITT, yoga, pilates, etc.)?  Any foods you really don't like?  More information is better!"
                ) {
                  setAdditionalInfo(option);
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
              fillColor="black"
              textStyle={{ textDecorationLine: "none", color: "black" }}
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
    if (question.type === "picker") {
      inputField = (
        <Picker
          selectedValue={
            question.name === "What is your height?" ? height : weight
          }
          onValueChange={(value) => {
            if (question.name === "What is your height?") {
              setHeight(value);
            } else if (question.name === "What is your weight in lbs?") {
              setWeight(value);
            }
          }}
        >
          {question.options.map((option, i) => (
            <Picker.Item label={option} value={option} key={i} />
          ))}
        </Picker>
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
                      handleUpdateProfile();
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

  const handleUpdateProfile = async () => {
    const uid = user.user.uid;
    const docRef = doc(db, "profiles", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(doc(db, "profiles", uid), {
        name: name,
        ageGroup: ageGroup,
        height: height,
        weight: weight,
        bodyType: bodyType,
        currentFitnessLevel: currentFitnessLevel,
        lifestyle: lifestyle,
        fitnessExperienceLevel: fitnessExperienceLevel,
        currentDiet: currentDiet,
        dietaryRestrictions: dietaryRestrictions,
        fitnessGoals: fitnessGoals,
        timeline: timeline,
        dailyAllotment: dailyAllotment,
        additionalInfo: additionalInfo,
      });
      const updateProfileDoc = await getDoc(docRef);
      const updatedProfile = updateProfileDoc.data();
      userStore.setProfile(updatedProfile);
    } else {
      console.log("No such document!");
    }
    navigation.navigate("Home");
  };

  return (
    <Box>
      <Center h="80%">{renderQuestion()}</Center>
    </Box>
  );
};

export default QuestionsScreen;
