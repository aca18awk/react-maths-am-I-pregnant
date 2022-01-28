import * as React from "react";
import { FunctionComponent } from "react";
import { SectionHeader, SectionDescription } from "./Form.style";
import { FormattedMessage } from "react-intl";
export interface SectionProps {
  header: string;
  description: string;
  link?: {
    placeholder: string;
    link: string;
  };
}

const Section: FunctionComponent<SectionProps> = ({
  header,
  description,
  link,
}: SectionProps) => {
  return (
    <>
      <SectionHeader>
        <FormattedMessage id={header} />
      </SectionHeader>
      <SectionDescription>
        <FormattedMessage id={description} />
      </SectionDescription>
      {/* {link && (
        <SectionDescription>
          <FormattedMessage id={link.placeholder} />
        </SectionDescription>
      )} */}
    </>
  );
};
export default Section;
