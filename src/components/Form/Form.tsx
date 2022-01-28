import { FunctionComponent, useEffect, useState } from "react";
import { FormArea, Submit } from "./Form.style";
import { FormattedMessage } from "react-intl";
import DateQuestion from "./Questions/DateQuestion";
import MultiAnswerQuestion from "./Questions/MultiAnswerQuestion";
import Section from "./Section";
import InputQuestion from "./Questions/InputQuestion";
import MultiChoiceQuestion from "./Questions/MultiChoiceQuestion";
import { BOOL_ANSWERS, AGE_ANSWERS, CONTRACEPTION_NAMES } from "./constants";
import { getProbability, Result } from "./helpers";
import Results from "../Result/Results";

const Form: FunctionComponent = () => {
  const [hadIntercourse, setHadIntercourse] = useState<string>("yes");
  const [whenIntercourse, setWhenIntercourse] = useState<Date | null>(null);
  const [hadContraception, setHadContraception] = useState<string>("no");
  const [contraceptions, setContraceptions] = useState<string[]>([]);
  const [knowOvulation, setKnowOvulation] = useState<string>("no");
  const [whenOvulation, setWhenOvulation] = useState<Date | null>(null);
  const [whenPeriod, setWhenPeriod] = useState<Date | null>(null);
  const [age, setAge] = useState<string>("younger");
  const [menstruationLength, setMenstruationLength] = useState<number | null>(
    null
  );
  const [submit, setSubmit] = useState<boolean>(false);
  const [results, setResults] = useState<Result | null>(null);

  useEffect(() => {
    if (hadContraception === "no") {
      setContraceptions([]);
    }
  }, [hadContraception]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmit(true);
    setResults(
      getProbability(
        whenIntercourse,
        hadContraception,
        contraceptions,
        knowOvulation,
        whenOvulation,
        whenPeriod,
        menstruationLength,
        age
      )
    );
  };

  return (
    <>
      <FormArea>
        <form onSubmit={handleSubmit}>
          <Section header="intercourseH" description="intercourseD" />
          <MultiChoiceQuestion
            id="hadIntercourse"
            field={hadIntercourse}
            fields={BOOL_ANSWERS}
            onPress={setHadIntercourse}
            required
          />
          {hadIntercourse === "yes" && (
            <>
              <DateQuestion
                id="whenIntercourse"
                onPress={setWhenIntercourse}
                required
              />
              <MultiChoiceQuestion
                id="hadContraception"
                field={hadContraception}
                fields={BOOL_ANSWERS}
                onPress={setHadContraception}
                required
              />
              {hadContraception === "yes" && (
                <MultiAnswerQuestion
                  id="whatContraception"
                  field={contraceptions}
                  choices={CONTRACEPTION_NAMES}
                  onPress={setContraceptions}
                  required
                />
              )}

              <Section
                header="menstruationH"
                description="menstruationD"
                link={{
                  placeholder: "menstruationLinkPlaceholder",
                  link: "menstruationLink",
                }}
              />

              <MultiChoiceQuestion
                id="age"
                field={age}
                fields={AGE_ANSWERS}
                onPress={setAge}
                required
              />

              <MultiChoiceQuestion
                id="ovulation"
                field={knowOvulation}
                fields={BOOL_ANSWERS}
                onPress={setKnowOvulation}
                required
              />
              {knowOvulation === "yes" ? (
                <DateQuestion
                  id="whenOvulation"
                  onPress={setWhenOvulation}
                  required
                />
              ) : (
                <>
                  <DateQuestion
                    id="whenPeriod"
                    onPress={setWhenPeriod}
                    required
                  />

                  <InputQuestion
                    id="menstruationLength"
                    onPress={setMenstruationLength}
                    required
                  />
                </>
              )}
            </>
          )}
          <Submit type="submit">
            <FormattedMessage id="submit" />
          </Submit>
        </form>
      </FormArea>
      {submit && results && <Results result={results} />}
    </>
  );
};
export default Form;
