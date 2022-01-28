import * as React from "react";
import { FunctionComponent } from "react";
import { QuestionArea, Question, Label } from "../Form.style";
import { FormattedMessage } from "react-intl";

type MultiAnswerQuestionProps = {
  id: string;
  field: string[];
  choices: string[];
  onPress: React.Dispatch<React.SetStateAction<string[]>>;
  required?: boolean;
  disabled?: boolean;
};

const MultiAnswerQuestion: FunctionComponent<MultiAnswerQuestionProps> = ({
  id,
  field,
  choices,
  onPress,
  required,
  disabled,
}: MultiAnswerQuestionProps) => {
  const updateList = (value: string, ticked: boolean) => {
    if (ticked) {
      const newValue = [...field];
      newValue.push(value);
      onPress(newValue);
    } else {
      onPress(field.filter((el) => el !== value));
    }
  };
  return (
    <QuestionArea>
      <Question>
        <FormattedMessage id={id} />
      </Question>
      {choices.map((name) => (
        <label key={name} className="container">
          <input
            name={id}
            type="checkbox"
            value={name}
            onChange={(e) => updateList(e.target.value, e.target.checked)}
            disabled={disabled}
          />
          <span className="checkmark"></span>
          <FormattedMessage id={name} />
        </label>
      ))}
    </QuestionArea>
  );
};
export default MultiAnswerQuestion;

MultiAnswerQuestion.defaultProps = {
  required: false,
  disabled: false,
};
