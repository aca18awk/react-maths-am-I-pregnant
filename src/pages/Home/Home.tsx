import * as React from "react";
import { FunctionComponent } from "react";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form";
import Intro from "../../components/Intro/Intro";
import Navbar from "../../components/Navbar/Navbar";

const Home: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Form />
      <Footer />
    </>
  );
};
export default Home;
