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
  const [answers, setAnswers] = useState({
    name: "",
    ageGroup: "",
    height: "",
    weight: "",
    bodyType: "",
    currentFitnessLevel: "",
    lifestyle: "",
    fitnessExperienceLevel: "",
    currentDiet: "",
    dietaryRestrictions: [],
    fitnessGoals: [],
    timeline: "",
    dailyAllotment: "",
    additionalInfo: "",
  });

  const [questionIndex, setQuestionIndex] = useState(0);

  const updateAnswer = (question, answer) => {
    setAnswers((prevAnswers) => {
      return {
        ...prevAnswers,
        [question.answerKey]: answer,
      };
    });
  };

  const updateArrayAnswer = (question, answer, addAnswer) => {
    if (addAnswer) {
      setAnswers((prevAnswers) => {
        return {
          ...prevAnswers,
          [question.answerKey]: [...prevAnswers[question.answerKey], answer],
        };
      });
    } else {
      setAnswers((prevAnswers) => {
        return {
          ...prevAnswers,
          [question.answerKey]: prevAnswers[question.answerKey].filter(
            (item) => item !== answer
          ),
        };
      });
    }
  };

  const renderQuestion = () => {
    const question = questions[questionIndex];
    let inputField =
      question.type === "input" ? (
        <Input
          placeholder="Enter your answer here"
          onChangeText={(text) => {
            updateAnswer(question, text);
          }}
          value={answers[question.answerKey]}
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
                updateAnswer(question, option);
              }}
              isChecked={answers[question.answerKey] === option}
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
                updateArrayAnswer(question, option, isChecked);
              }}
              text={option}
              isChecked={answers[question.answerKey].includes(option)}
            />
          ))}
        </View>
      );
    }
    if (question.type === "picker") {
      inputField = (
        <Picker
          selectedValue={answers[question.answerKey]}
          onValueChange={(value) => {
            updateAnswer(question, value);
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
      await updateDoc(doc(db, "profiles", uid), answers);
      const updateProfileDoc = await getDoc(docRef);
      const updatedProfile = updateProfileDoc.data();
      userStore.setProfile(updatedProfile);
    } else {
      console.log("No such document!");
    }
    userStore.emitProfileLoaded();
    navigation.navigate("Home");
  };

  return (
    <Box>
      <Center h="80%">{renderQuestion()}</Center>
    </Box>
  );
};

export default QuestionsScreen;
