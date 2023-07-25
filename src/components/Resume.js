import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div className="preview">
        <div className="close">
          <p className="close-text">X</p>
        </div>
        <h1 className="header">
          <span>.R</span>esume
        </h1>
        <h1 className="preview-header">Preview resume</h1>
        <div className="preview-main">
          <div className="personal">
            <h1 className="name">Daniel Endaylalu</h1>
            <h3 className="acadamy">Enginering Student</h3>
          </div>
          <div className="side">
            <div className="side1">
              <div className="contact">
                <h2>Conatct</h2>
                <ul>
                  <li>phone: +251-968-47-98-14</li>
                  <li>email: endaylaludaniel@gmail.com</li>
                  <li>address: Ethiopia addis ababa</li>
                </ul>
              </div>
              <div className="achievement">
                <h2>Achievement</h2>
                <ul>
                  <li>
                    <h4>web developer at e-talent</h4>
                    <p>2022</p>
                  </li>
                  <li>
                    <h4>medical doctor at health for all</h4>
                    <p>2015</p>
                  </li>
                </ul>
              </div>
              <div className="skills">
                <h2>Skills</h2>
                <ul>
                  <li>Html</li>
                  <li>css</li>
                  <li>javascript</li>
                  <li>c++</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
            <div className="hr"></div>
            <div className="side2">
              <div className="summery">
                <h2>Summery</h2>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.In publishing and graphic design, Lorem ipsum is a
                  placeholder text commonly used to demonstrate the visual form
                  of a document or a typeface without relying on meaningful
                  content. Lorem ipsum may be used as a placeholder before final
                  copy is available. document or a typeface without relying on
                  meaningful content. Lorem ipsum may be used as a placeholder
                  before final copy is available.In publishing and graphic
                  design, Lorem ipsum is a placeholder text commonly used to
                  demonstrate the visual form of a document or a typeface
                  without relying on meaningful content. Lorem ipsum may be used
                  as a placeholder before final copy is available.
                </p>
              </div>
              <div className="education">
                <h2>Education</h2>
                <h3>Addis ababa science and technology university</h3>
                <p>
                  <span>2020</span>-<span>2025</span>
                </p>
                <h3>Tech camp university</h3>
                <p>
                  <span>20020</span>-<span>2022</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
