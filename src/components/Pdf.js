import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

function Pdf({ resumeData }) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4",
    },
    name: {
      color: "red",
      textAlign: "center",
    },
    acadamy: {
      color: "red",
      textAlign: "center",
    },
    phone: {
      color: "red",
      textAlign: "center",
    },
  });
  return (
    <Document>
      <Page>
        <View style={styles.name}>
          <Text> name : {resumeData.name}</Text>
        </View>
        <View style={styles.acadamy}>
          <Text> acadamy : {resumeData.acadamy}</Text>
        </View>
        <View style={styles.phone}>
          <Text> phone : {resumeData.contact.phone}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default Pdf;
