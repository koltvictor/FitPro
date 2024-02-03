const generateWeightOptions = (startWeight, endWeight) => {
  const options = [];
  for (let weight = startWeight; weight <= endWeight; weight++) {
    options.push(`${weight}`);
  }
  return options;
};

const generateHeightOptions = (startHeight, endHeight) => {
  const options = [];
  for (let height = startHeight; height <= endHeight; height++) {
    const feet = Math.floor(height / 12);
    const inches = height % 12;
    const inchesStr = inches ? inches.toString() : "0";
    const option = `${feet}' ${inchesStr}"`;
    options.push(option);
  }
  return options;
};

export const questions = [
  {
    index: 0,
    name: "What is your name?",
    type: "input",
  },
  {
    index: 1,
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
    index: 2,
    name: "What is your height?",
    type: "picker",
    options: generateHeightOptions(48, 84),
  },
  {
    index: 3,
    name: "What is your weight in lbs?",
    type: "picker",
    options: generateWeightOptions(80, 350),
  },
  {
    index: 4,
    name: "What is your body type?",
    type: "radio",
    options: [
      "Ectomorph: I am tall & thin with small bones and little muscle mass, narrow shoulders and a small waist, and I have some difficulty gaining weight and building muscle.",
      "Mesomorph: I am athletic & muscular, with medium build, narrow waist and broad shoulders, and can easily gain muscle and lose fat.",
      "Endomorph: I am stocky with short limbs and broad shoulders, with a large bone structure and difficulty losing weight.",
    ],
    accessibilityLabel:
      "This is a radio button for the question 'What is your body type?'",
  },
  {
    index: 5,
    name: "What is your current fitness level?",
    type: "radio",
    options: [
      "Expert: I am a professional athlete or trainer, or I am in great shape and have been working out for years.",
      "Advanced: I am in good shape and have been working out for a while.",
      "Intermediate: I am in decent shape and have been working out occasionally for a few months.",
      "Beginner: I am new to working out.",
    ],
    accessibilityLabel:
      "This is a radio button for the question 'What is your current fitness level?'",
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
    options: [
      "Lose Weight",
      "Gain Muscle",
      "Maintain Weight",
      "Improve Cardiovascular Health",
      "Improve Flexibility",
      "Improve Strength and Endurance",
      "Improve Balance and Coordination",
      "Improve overall Health and Wellness",
      "To be able to participate in physical activities without getting winded or tired",
      "Reach a certain fitness level",
      "Change body composition",
      "I am training for a specific event",
      "For medical reasons",
      "For me, myself, and I",
    ],
    accessibilityLabel:
      "This is a checkbox for the question 'What are your fitness goals?'",
  },
  {
    index: 11,
    name: "What is your fitness goal timeline?",
    type: "radio",
    options: [
      "I want to achieve my goals as quickly as possible",
      "I want to achieve my goals in a few months",
      "I want to achieve my goals in a year",
      "I want to achieve my goals in a few years",
      "I want to achieve my goals in 5+ years",
    ],
    accessibilityLabel:
      "This is a radio button for the question 'What is your fitness goal timeline?'",
  },
  {
    index: 12,
    name: "How much time do you have to dedicate to working out in a day?",
    type: "radio",
    options: [
      "90+ minutes",
      "60-90 minutes",
      "30-60 minutes",
      "15-30 minutes",
      "15 minutes or less",
    ],
    accessibilityLabel:
      "This is a radio button for the question 'How much time do you have to dedicate to working out in a day?'",
  },
  {
    index: 13,
    name: "Do you have any injuries, any allergies, any health conditions, or any other information you would like to share?  Are there any workouts you  prefer (i.e. HITT, yoga, pilates, etc.)?  Any foods you really don't like?  More information is better!",
    type: "input",
  },
];
