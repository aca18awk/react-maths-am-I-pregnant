import contraceptionsList from "../../assets/contraceptions.json";
import { PREGNANCY_PROBABILITY } from "./constants";
export type Result = {
  contraceptions: {
    probability: number;
    explanation: string;
  };
  intercourse: {
    cycleViability: number;
    probability: number;
    explanation: string;
    ovulationDay: string;
  };
  probability: number;
};
export const getProbability = (
  whenIntercourse: Date | null,
  hadContraception: string,
  contraceptions: string[],
  knowOvulation: string,
  whenOvulation: Date | null,
  whenPeriod: Date | null,
  menstruationLength: number | null,
  age: string
) => {
  // contraceptions:
  const contraceptionResult = computeContraceptionProb(
    hadContraception,
    contraceptions
  );

  const pregnancyProb = getPregnancyProbability(
    whenIntercourse,
    knowOvulation,
    whenOvulation,
    whenPeriod,
    menstruationLength,
    age
  );
  if (contraceptionResult && pregnancyProb) {
    console.log(
      pregnancyProb.probability * contraceptionResult.probability * 100,
      "%"
    );
    console.log(pregnancyProb);
    console.log(contraceptionResult);
  }
  const result: Result = {
    contraceptions: contraceptionResult,
    intercourse: pregnancyProb,
    probability: pregnancyProb.probability * contraceptionResult.probability,
  };
  return result;
};

const computeOvulationDay = (
  knowOvulation: string,
  whenOvulation: Date | null,
  whenPeriod: Date | null,
  menstruationLength: number | null
) => {
  if (knowOvulation === "yes" && whenOvulation) return whenOvulation;
  else {
    if (whenPeriod && menstruationLength) {
      let ovulationDay = new Date(whenPeriod);
      ovulationDay.setDate(whenPeriod.getDate() + (menstruationLength - 14));
      return ovulationDay;
    }
  }
  return null;
};

const computeContraceptionProb = (
  hadContraception: string,
  contraceptions: string[]
) => {
  const explanation = (
    contraceptions: {
      name: string;
      likelihood: number;
    }[]
  ) => {
    let result = `According to the UK National Health Service, the effectiveness of: `;
    contraceptions.forEach(({ name, likelihood }) => {
      result += `${name} is ${(1 - likelihood) * 100}%, `;
    });
    return result.slice(0, -1) + ".";
  };

  if (hadContraception === "yes") {
    let resultC = contraceptionsList.filter((contr) => {
      return contraceptions.includes(contr.name);
    });
    let probC = resultC.reduce((probability, contr) => {
      return probability * contr.likelihood;
    }, 1);

    return {
      probability: probC,
      explanation: explanation(resultC),
    };
  } else {
    return {
      probability: 1,
      explanation: "No contraceptions were used",
    };
  }
};

const getPregnancyProbability = (
  whenIntercourse: Date | null,
  knowOvulation: string,
  whenOvulation: Date | null,
  whenPeriod: Date | null,
  menstruationLength: number | null,
  age: string
) => {
  const ovulationDay = computeOvulationDay(
    knowOvulation,
    whenOvulation,
    whenPeriod,
    menstruationLength
  );
  const age_range = age === "younger" ? "(19–26)" : "(35-39)";
  const explanation = (date: string, probability: number) =>
    `According to 'Effects of Sexual Intercourse Patterns in Time to Pregnancy Studies' (2007) the probability of getting pregnant for women in age range ${age_range} ${date} your ovulation is ${probability}%. `;
  const explanationNotIncluded = (date: string) => {
    return `In 'Effects of Sexual Intercourse Patterns in Time to Pregnancy Studies' (2007) the probability of getting pregnant for women in age range ${age_range} ${date} was low enough to not be measured. The only way of getting pregnant outside fertility window is an mistake in computing the ovulation date or second ovulation during menstruation cycle (extremely unlikely). Hence I set the probability to 0.01%.  `;
  };

  // sex_date - ovulation_date
  const query = age === "younger" ? "younger" : "older";
  if (ovulationDay && whenIntercourse) {
    let cycleViability = whenIntercourse.getDate() - ovulationDay.getDate();
    const month = ovulationDay.getUTCMonth() + 1; //months from 1-12
    const day = ovulationDay.getUTCDate();
    const year = ovulationDay.getUTCFullYear();
    let result = {
      cycleViability: cycleViability,
      probability: 0,
      explanation: "",
      ovulationDay: `You ovulated on ${day}/${month}/${year}.`,
    };
    const relativeOvul = cycleViability < 0 ? "before" : "after";
    const days = Math.abs(result.cycleViability) === 1 ? "day" : "days";
    if (cycleViability < -8) {
      result.explanation = explanationNotIncluded(
        "more than 8 days before ovulation"
      );
      result.probability = 0.0001;
      return result;
    } else if (cycleViability > 2) {
      result.explanation = explanationNotIncluded(
        "more than 2 days after ovulation"
      );
      result.probability = 0.0001;
      return result;
    }
    result.probability = PREGNANCY_PROBABILITY.filter((prob) => {
      return cycleViability === prob.cycleViability;
    })[0][query];
    const relative_date =
      cycleViability === 0
        ? "in a day of"
        : `${Math.abs(cycleViability)} ${days} ${relativeOvul}`;
    result.explanation = explanation(relative_date, result.probability * 100);
    return result;
  } else
    return {
      cycleViability: -1,
      probability: 0,
      explanation:
        "If the sperm has not been deposited inside vagina, you are not pregnant",
      ovulationDay: "",
    };
};
