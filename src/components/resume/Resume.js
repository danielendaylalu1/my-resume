import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import DownlaodPdf from "./DownlaodPdf";
import Personal from "./Personal";
import Contact from "./Contact";
import Achievement from "./Achievement";
import Skills from "./Skills";
import Education from "./Education";

const Resume = ({ showPDF, data }) => {
  const resumeData = useSelector((state) => state.resume);
  const { isVisible } = useSelector((state) => state.ui);

  return (
    <div className={`resume ${isVisible ? "" : "hide"}`}>
      <div className="preview">
        <h1 className="header">
          <span>.R</span>esume
        </h1>
        <h1 className="preview-header">Preview resume</h1>
        <div className="download">{showPDF && <DownlaodPdf data={data} />}</div>
        <div className="preview-main">
          <Personal resumeData={resumeData} />
          <div className="side">
            <div className="side1">
              <Contact resumeData={resumeData} />
              <Achievement resumeData={resumeData} />
              <Skills resumeData={resumeData} />
            </div>

            <div className="side2">
              <div className="summery">
                <h2>Summery</h2>
                <p>{resumeData.summery}</p>
              </div>
              <Education resumeData={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
