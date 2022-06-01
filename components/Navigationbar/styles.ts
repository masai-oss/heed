import { createStyles } from "@mantine/core";

export const createNavStyles = createStyles((theme) => ({
  main: {
    background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
  },
  headerColor: {
    color: theme.colors.gray[6],
    position: "sticky",
    top: "0px",
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
    right: "5%",
  },
  navOptions: { display: "flex", marginLeft: 50, width: 450, justifyContent: "space-around" },
  navButtons: {
    paddingBottom: 2,
    boxSizing: "border-box",
    fontSize: 20,
    ":hover": {
      cursor: "pointer",
    },
  },
}));






