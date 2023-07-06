export const questions = [
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
      name: "What is your weight in lbs?",
      type: "input",
    },
    {
      index: 5,
      name: "What is your body type?",
      type: "radio",
      options: [
        "Ectomorph: tall & thin with small bones and little muscle mass, difficulty gaining weight and building muscle",
        "Mesomorph: athletic & muscular, with medium build and can easily gain muscle and lose fat",
        "Endomorph: short & stocky, with a large bone structure and difficulty losing weight.",
      ],
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
      name: "What is your current diet like?",
      type: "radio",
      options: [
        "I eat very healthfully",
        "I eat pretty healthfully",
        "I eat somewhat healthfully",
        "I eat somewhat unhealthfully",
        "I eat pretty unhealthfully",
        "I eat very unhealthfully",
      ],
      accessibilityLabel:
        "This is a radio button for the question 'What is your current diet like?'",
    },
    {
      index: 9,
      name: "Do you have any dietary restrictions?",
      type: "checkbox",
    //   multiple: true,
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
        "This is a checkbox for the question 'Do you have any dietary restrictions?'",
    },
    {
      index: 10,
      name: "What are your fitness goals?",
      type: "checkbox",
    //   multiple: true,

      options: [
        "Lose Weight",
        "Gain Muscle",
        "Maintain Weight",
        "Improve Cardiovascular Health",
        "Improve Flexibility",
        "Improve Strength and Endurance",
        "Improve Balance and Coordination",
        "Improve Posture",
      ],
      accessibilityLabel:
        "This is a checkbox for the question 'What are your fitness goals?'",
    },
  ];