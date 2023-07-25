import Form from "./components/Form";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="app">
      <h1 className="header">
        <span>.R</span>esume
      </h1>
      <div className="main">
        <Form />
        <Resume />
      </div>
    </div>
  );
}

export default App;
