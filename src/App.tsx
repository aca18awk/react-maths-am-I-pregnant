import React from "react";
import "./App.css";
import Root from "./components/Root";
import Home from "./pages/Home";
import GlobalStyle from "./globalStyles";
export default function App() {
  return (
    <Root>
      <GlobalStyle />
      <Home />
    </Root>
  );
}
