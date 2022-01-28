import contraceptionsList from "../../assets/contraceptions.json";

export const AGE_ANSWERS = [
  {
    value: "younger",
    name: "ageAnswer1",
  },
  {
    value: "older",
    name: "ageAnswer2",
  },
];

export const BOOL_ANSWERS = [
  {
    value: "yes",
    name: "yes",
  },
  {
    value: "no",
    name: "no",
  },
];

export const CONTRACEPTION_NAMES = contraceptionsList.map((el) => el.name);

export const PREGNANCY_PROBABILITY = [
  { cycleViability: -8, younger: 0.0042, older: 0.0039 },
  { cycleViability: -7, younger: 0.0119, older: 0.0108 },
  { cycleViability: -6, younger: 0.0308, older: 0.0265 },
  { cycleViability: -5, younger: 0.082, older: 0.0658 },
  { cycleViability: -4, younger: 0.2565, older: 0.1728 },
  { cycleViability: -3, younger: 0.2971, older: 0.1951 },
  { cycleViability: -2, younger: 0.5336, older: 0.2901 },
  { cycleViability: -1, younger: 0.3221, older: 0.2029 },
  { cycleViability: 0, younger: 0.101, older: 0.0798 },
  { cycleViability: 1, younger: 0.0232, older: 0.0205 },
  { cycleViability: 2, younger: 0.021, older: 0.0187 },
];
