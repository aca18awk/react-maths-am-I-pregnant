import * as React from "react";
import { FunctionComponent } from "react";
import {
  Introduction,
  Image,
  Text,
  Title,
  IntroText,
  ImageContainer,
} from "./Intro.style";
import { FormattedMessage } from "react-intl";
import contraceptions from "./../../images/contraceptions.png";
const Intro: FunctionComponent = () => {
  return (
    <Introduction>
      <ImageContainer>
        <Image src={contraceptions} alt="different contraception methods" />
      </ImageContainer>
      <IntroText>
        <Title> Maths, am I pregnant? </Title>
        <Text>
          <FormattedMessage id="intro" />
        </Text>
      </IntroText>
    </Introduction>
  );
};
export default Intro;
