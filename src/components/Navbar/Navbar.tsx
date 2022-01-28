import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { LanguageContext } from "../Root";
import { Nav, Flag, Title, Flags } from "./Navbar.style";
import { FormattedMessage } from "react-intl";

const NavBar: FunctionComponent = () => {
  const languageContext = useContext(LanguageContext);
  return (
    <Nav>
      <Title>
        <FormattedMessage id="title" />
      </Title>
      <Flags>
        <Flag onClick={() => languageContext.setLanguage("en")}>🇬🇧</Flag>
        <Flag onClick={() => languageContext.setLanguage("pl")}>🇵🇱</Flag>
      </Flags>
    </Nav>
  );
};
export default NavBar;
