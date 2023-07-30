import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";

function Pdf({ resumeData }) {
  return (
    <Document>
      <Page>
        <Text style={styles.header}>Resume</Text>
        <Text style={styles.name}>{resumeData.name}</Text>
        <Text style={styles.acadamy}>{resumeData.profession}</Text>
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
                    <Text style={styles.cardItem} key={index}>
                      {resumeData.education.major[index].value}
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
