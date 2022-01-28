import React, { ReactNode, useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "../translations/en.json";
import plMessages from "../translations/pl.json";

interface RootProps {
  children: ReactNode;
}

type Locale = "en" | "pl";

type Messages = {
  pl: Record<string, string>;
  en: Record<string, string>;
};

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<Locale>>;
};

const messages: Messages = {
  pl: plMessages,
  en: enMessages,
};

export const LanguageContext = React.createContext<LanguageContextType | null>(
  null
) as React.Context<LanguageContextType>;

const Root: React.FunctionComponent<RootProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("en");

  const context = {
    language: locale,
    setLanguage: setLocale,
  };

  return (
    <LanguageContext.Provider value={context}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default Root;
