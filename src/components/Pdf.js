import { Document, Page, Text } from "@react-pdf/renderer";
// import { useSelector } from "react-redux/es/hooks/useSelector";

function Pdf({ resumeData }) {
  //   const resumeData = useSelector((state) => state.resume);
  return (
    <Document>
      <Page>
        <Text>
          <div className="preview">
            <h1 className="header">
              <span>.R</span>esume
            </h1>
            <h1 className="preview-header">Preview resume</h1>

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
                      {resumeData.achievement &&
                        resumeData.achievement.map((ach, index) => {
                          return (
                            <li key={index}>
                              <h4>{ach}</h4>
                              <p>{ach}</p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Skills</h2>
                    <ul>
                      {resumeData.skills &&
                        resumeData.skills.map((skill, index) => {
                          return <li key={index}>{skill}</li>;
                        })}
                    </ul>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="side2">
                  <div className="summery">
                    <h2>Summery</h2>

                    <p>{resumeData.summery}</p>
                  </div>
                  <div className="education">
                    <h2>Education</h2>
                    {resumeData.education &&
                      resumeData.education.map((edu, index) => {
                        return (
                          <div key={index}>
                            <h3>
                              Addis ababa science and technology university
                            </h3>
                            <p>
                              <span>2020</span>-<span>2025</span>
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Text>
      </Page>
    </Document>
  );
}

export default Pdf;
