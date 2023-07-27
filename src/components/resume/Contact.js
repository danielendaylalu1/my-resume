import React from "react";

function Contact({ resumeData }) {
  return (
    <div className="contact">
      <h2>Conatct</h2>
      <ul>
        <li>phone: {resumeData.contact.phone}</li>
        <li>email: {resumeData.contact.email}</li>
        <li>address: {resumeData.contact.address}</li>
      </ul>
    </div>
  );
}

export default Contact;
