import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "../Pdf";

function DownlaodPdf({ data }) {
  return (
    <PDFDownloadLink document={<Pdf resumeData={data} />} fileName="myfile.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );
}

export default DownlaodPdf;
