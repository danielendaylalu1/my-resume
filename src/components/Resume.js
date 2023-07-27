import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { toogle } from "../store/uiSlice";

import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./Pdf";

const Resume = ({ showPDF, data }) => {
  const resumeData = useSelector((state) => state.resume);
  const { isVisible } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <div className={`resume ${isVisible ? "" : "hide"}`}>
      {/* {console.log(resumeData)} */}
      <div className="preview">
        <div className="close">
          <p
            className="close-text"
            onClick={() => {
              dispatch(toogle());
            }}
          >
            X
          </p>
        </div>
        <h1 className="header">
          <span>.R</span>esume
        </h1>
        <h1 className="preview-header">Preview resume</h1>
        <div className="download">
          {showPDF && (
            <PDFDownloadLink
              document={<Pdf resumeData={data} />}
              fileName="myfile.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download now!"
              }
            </PDFDownloadLink>
          )}
        </div>
        <div className="preview-main">
          <div className="personal">
            <h1 className="name">{resumeData.name}</h1>
            <h3 className="acadamy">{resumeData.acadamy}</h3>
          </div>
          <div className="side">
            <div className="side1">
              <div className="contact">
                <h2>Conatct</h2>
                <ul>
                  <li>phone: {resumeData.contact.phone}</li>
                  <li>email: {resumeData.contact.email}</li>
                  <li>address: {resumeData.contact.address}</li>
                </ul>
              </div>
              <div className="achievement">
                <h2>Achievement</h2>
                <ul>
                  {/* {resumeData.achievement.map((ach, index) => {
                    return (
                      <li key={index}>
                        <h4>{ach}</h4>
                        <p>{ach}</p>
                      </li>
                    );
                  })} */}
                </ul>
              </div>
              <div className="skills">
                <h2>Skills</h2>
                <ul>
                  {resumeData.skills.map((skill, index) => {
                    return <li key={index}>{skill.value}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="hr"></div>
            <div className="side2">
              <div className="summery">
                <h2>Summery</h2>
                {/* {console.log(resumeData.summery)} */}
                <p>{resumeData.summery}</p>
              </div>
              <div className="education">
                <h2>Education</h2>
                {/* {resumeData.education.map((edu, index) => {
                  return (
                    <div key={index}>
                      <h3>{edu.value}</h3>
                      <p>
                        <span>2020</span>-<span>2025</span>
                      </p>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
