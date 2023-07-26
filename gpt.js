import React, { useState } from "react";
import { Document, Page, Text, PDFDownloadLink } from "@react-pdf/renderer";

// Create a PDF document component
const MyDocument = ({ name, address }) => (
  <Document>
    <Page>
      <Text>Name: {name}</Text>
      <Text>Address: {address}</Text>
    </Page>
  </Document>
);

const App = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [showPDF, setShowPDF] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPDF(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>

      {showPDF && (
        <PDFDownloadLink
          document={<MyDocument name={name} address={address} />}
          fileName="myfile.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      )}
    </>
  );
};

export default App;
