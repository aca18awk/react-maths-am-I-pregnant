import * as React from "react";
import { FunctionComponent } from "react";
import { QuestionArea, Question, Label } from "../Form.style";
import { FormattedMessage } from "react-intl";

type Field = {
  value: string;
  name: string;
};

type MultiChoiceQuestionProps = {
  id: string;
  field: string;
  fields: Field[];
  onPress: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
  disabled?: boolean;
};

const MultiChoiceQuestion: FunctionComponent<MultiChoiceQuestionProps> = ({
  id,
  field,
  fields,
  onPress,
  required,
  disabled,
}: MultiChoiceQuestionProps) => {
  //   const [hadIntercourse, setHadIntercourse] = useState("no");

  return (
    <QuestionArea>
      <Question>
        <FormattedMessage id={id} />
      </Question>
      {fields.map(({ value, name }) => (
        <Label key={value}>
          <input
            type="radio"
            value={value}
            checked={field === value}
            onChange={() => onPress(value)}
            required={required}
            disabled={disabled}
          />
          <FormattedMessage id={name} />
        </Label>
      ))}
    </QuestionArea>
  );
};
export default MultiChoiceQuestion;

MultiChoiceQuestion.defaultProps = {
  required: false,
  disabled: false,
};
