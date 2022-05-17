import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";
import Header from "components/Header";
import Leaders from 'components/Team/Leaders'
import JobDescription from 'components/Job/JobDescription'
import Footer from 'components/Footer'

const FirstFrame: FunctionComponent = function ({job}) {
  return (
    <div {...s.majorContainer} >
      <div {...s.photoLayer}>
      </div>
      <div {...s.contentLayer}>
        <Header />
        <JobDescription job={job} />
        <Footer />
      </div>
    </div>
  );
};

export default FirstFrame;
