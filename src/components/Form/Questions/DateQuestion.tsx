import * as React from "react";
import { FunctionComponent } from "react";
import { QuestionArea, Question } from "../Form.style";
import { FormattedMessage } from "react-intl";

type DateQuestionProps = {
  id: string;
  onPress: React.Dispatch<React.SetStateAction<Date | null>>;
  required?: boolean;
  disabled?: boolean;
};

const DateQuestion: FunctionComponent<DateQuestionProps> = ({
  id,
  onPress,
  required,
  disabled,
}: DateQuestionProps) => {
  const setDate = (
    date: string,
    set: React.Dispatch<React.SetStateAction<Date | null>>
  ) => {
    if (date) set(new Date(date));
    else set(null);
  };
  return (
    <QuestionArea>
      <Question>
        <FormattedMessage id={id} />
      </Question>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value, onPress)}
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
export default DateQuestion;

DateQuestion.defaultProps = {
  required: false,
  disabled: false,
};
