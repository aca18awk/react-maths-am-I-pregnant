import { Result } from "../Form/helpers";
import {
  ResultsArea,
  ResultsText,
  ResultsProb,
  ResultsSection,
  ResultsContainer,
  References,
} from "./Results.style";
import { FormattedMessage } from "react-intl";
import { ImageContainer, IntroText, Image } from "../Intro/Intro.style";
import contraceptions from "./../../images/results.png";
import { FunctionComponent } from "react";

interface ResultsI {
  result: Result;
}
const Results: FunctionComponent<ResultsI> = ({ result }: ResultsI) => {
  return (
    <>
      <ResultsContainer>
        <ImageContainer>
          <Image src={contraceptions} alt="different contraception methods" />
        </ImageContainer>
        <IntroText>
          <ResultsArea>
            <ResultsProb>
              <FormattedMessage id={"resultProbability"} />
              {result.probability * 100}%.*
            </ResultsProb>
            <ResultsSection>
              <FormattedMessage id={"menstruationH"} />:
            </ResultsSection>
            <ResultsText>{result.intercourse.ovulationDay}</ResultsText>
            <ResultsText>{result.intercourse.explanation}**</ResultsText>
            <ResultsSection> Contraceptions: </ResultsSection>
            <ResultsText>{result.contraceptions.explanation}</ResultsText>
          </ResultsArea>
        </IntroText>
      </ResultsContainer>
      <References>
        <div>
          * Probability was computed based on official, scientific studies.
          However, it is still a probability hence I cannot guarantee whether
          you are or aren't pregnant.
        </div>

        <div>
          ** Since the research was conducted only on 2 groups of women: in
          range (19-26) and (35-39), I classified women in age range (27-34) to
          the group 1 and women above 39 to the group 2. In reality, the
          probability for these groups may be lower.
        </div>
        <br></br>
        <div> References: </div>
        <div>
          <a
            href="https://academic.oup.com/aje/article/165/9/1088/90537"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            'Effects of Sexual Intercourse Patterns in Time to Pregnancy
            Studies' (2007)
          </a>
        </div>
        <div>
          <a
            href="https://www.nhs.uk/conditions/contraception/how-effective-contraception"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            UK National Health Service's webpage about contraceptions
          </a>
        </div>
      </References>
    </>
  );
};
export default Results;
