import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { LanguageContext } from "../Root";
import { FooterArea } from "./Footer.style";
import { FormattedMessage } from "react-intl";

const Footer: FunctionComponent = () => {
  const languageContext = useContext(LanguageContext);
  return (
    <FooterArea>
      <div>Maths, am I pregnant 2022 &copy; </div>
      <div> Aleksandra Kulbaka</div>
    </FooterArea>
  );
};
export default Footer;
