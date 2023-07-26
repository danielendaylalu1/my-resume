import Form from "./components/Form";
import Resume from "./components/Resume";
import { useState } from "react";

function App() {
  const [showPDF, setShowPDF] = useState(false);
  const [data, setData] = useState();
  return (
    <div className="app">
      <h1 className="header">
        <span>.R</span>esume
      </h1>
      <div className="main">
        <Resume showPDF={showPDF} data={data} />
        <Form setShowPDF={setShowPDF} setData={setData} />
      </div>
    </div>
  );
}

export default App;
