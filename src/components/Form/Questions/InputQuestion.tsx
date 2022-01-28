import * as React from "react";
import { FunctionComponent } from "react";
import { QuestionArea, Question } from "../Form.style";
import { FormattedMessage } from "react-intl";

type InputQuestionProps = {
  id: string;
  onPress: React.Dispatch<React.SetStateAction<number | null>>;
  required?: boolean;
  disabled?: boolean;
};

const InputQuestion: FunctionComponent<InputQuestionProps> = ({
  id,
  onPress,
  required,
  disabled,
}: InputQuestionProps) => {
  const setAnswer = (
    answer: string,
    set: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    if (answer) set(Number(answer));
    else set(null);
  };
  return (
    <QuestionArea>
      <Question>
        <FormattedMessage id={id} />
      </Question>
      <input
        type="number"
        onChange={(e) => setAnswer(e.target.value, onPress)}
        required={required}
        disabled={disabled}
        style={{
          backgroundColor: "transparent",
          color: "white",
          fontSize: "20px",
          border: "1px solid black",
          borderRadius: "5px",
          fontFamily: "Cond",
        }}
      />
    </QuestionArea>
  );
};
export default InputQuestion;

InputQuestion.defaultProps = {
  required: false,
  disabled: false,
};
