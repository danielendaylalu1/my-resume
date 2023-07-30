import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
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
