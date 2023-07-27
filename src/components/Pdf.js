import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

function Pdf({ resumeData }) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4",
    },
    header: {
      fontSize: "30px",
      color: "brown",
      marginTop: "40px",
      textAlign: "center",
    },
    name: {
      fontSize: "35px",
      marginTop: "20px",
      textAlign: "center",
    },
    acadamy: {
      fontSize: "15px",
      marginTop: "10px",
      textAlign: "center",
    },
    side: {
      display: "flex",
      flexDirection: "row",
      marginTop: "20px",
    },
    side1: {
      display: "flex",
      flexDirection: "column",
    },
    side2: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "80px",
    },
    cardHeader: {
      fontSize: "18px",
      color: "brown",
    },
    card: {
      marginTop: "40px",
      marginLeft: "30px",
      paddingRight: "10px",
    },
    cardItem: {
      fontSize: "14px",
      marginTop: "10px",
      width: "60%",
    },
    cardItemSmall: {
      fontSize: "8px",
      marginTop: "5px",
    },
    year: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
    },
    contactItem: {
      color: "brown",
      fontSize: "13px",
      marginTop: "10px",
      width: "50%",
    },
  });
  return (
    <Document>
      <Page>
        <Text style={styles.header}>Resume</Text>
        <Text style={styles.name}>{resumeData.name}</Text>
        <Text style={styles.acadamy}>{resumeData.acadamy}</Text>
        <View style={styles.side}>
          <View style={styles.side1}>
            <View style={styles.card}>
              <Text style={styles.cardHeader}>Contact</Text>
              <Text style={styles.cardItem}>phone:</Text>
              <Text style={styles.contactItem}>{resumeData.contact.phone}</Text>

              <Text style={styles.cardItem}>email:</Text>
              <Text style={styles.contactItem}>{resumeData.contact.email}</Text>

              <Text style={styles.cardItem}>address:</Text>
              <Text style={styles.contactItem}>
                {resumeData.contact.address}
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardHeader}>Achievement</Text>
              {/* <Text style={styles.cardItem}>{resumeData.achievement}</Text> */}
              {resumeData.achievement.ach.map((ach, index) => {
                return (
                  <View>
                    <Text style={styles.cardItem} key={index}>
                      {ach.value}
                    </Text>
                    <Text style={styles.cardItemSmall}>
                      {resumeData.achievement.year[index].value}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.card}>
              <Text style={styles.cardHeader}>Skills</Text>
              {resumeData.skills.map((skill, index) => {
                return (
                  <View>
                    <Text style={styles.cardItem} key={index}>
                      {skill.value}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.side2}>
            <View style={styles.card}>
              <Text style={styles.cardHeader}>Summery</Text>
              <Text style={styles.cardItem}>{resumeData.summery}</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardHeader}>Education</Text>
              {resumeData.education.edu.map((edu, index) => {
                return (
                  <View>
                    <Text style={styles.cardItem} key={index}>
                      {edu.value}
                    </Text>
                    <View style={styles.year}>
                      <Text style={styles.cardItemSmall}>
                        {resumeData.education.syear[index].value}
                      </Text>
                      <Text style={styles.cardItemSmall}>
                        {resumeData.education.eyear[index].value}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Pdf;
