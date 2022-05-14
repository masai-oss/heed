import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  main: {
    background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
  },
  headerColor: {
    color: theme.colors.gray[6],
    position:"sticky",
    top:"0px",
  },
  displayNone: {
    display: "none",
  },
  headerStyles: { display: "flex", alignItems: "center", height: "100%" },
  logoStyle: {
    color: "#228be6",
  },
  profileStyle: {
    position: "absolute",
    right:"5%",
  }
}));



