import { useDispatch } from "react-redux";
import { toogle } from "../store/uiSlice";
import { resumeBuilder } from "../store/resumeSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

import Personal from "./Personal";
import Contact from "./Contact";
import Achievement from "./Achievement";
import Skills from "./Skills";
import Summery from "./Summery";
import Education from "./Education";

function Form({ setShowPDF, setData }) {
  const { isVisible } = useSelector((state) => state.ui);

  const dispatch = useDispatch();
  return (
    <div className={`container ${isVisible ? "hide" : ""}`}>
      <h1 className="resume-header">Build your resume</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();

          setData({
            summery: e.target.summery.value,
            name: e.target.name.value.toUpperCase(),
            acadamy: e.target.acadamy.value,
            contact: {
              phone: e.target.phone.value,
              email: e.target.email.value,
              address: e.target.address.value,
            },
          });
          dispatch(
            resumeBuilder({
              summery: e.target.summery.value,
              name: e.target.name.value.toUpperCase(),
              acadamy: e.target.acadamy.value,
              contact: {
                phone: e.target.phone.value,
                email: e.target.email.value,
                address: e.target.address.value,
              },
              skills: Array.from(e.target.skill),
            })
          );

          dispatch(toogle());
          setShowPDF(true);
        }}
      >
        <Personal />
        <Contact />
        <Achievement />
        <Skills />
        <Summery />
        <Education />
        <button type="submit">Preview</button>
        <button type="reset">Clear fields</button>
      </form>
    </div>
  );
}

export default Form;
