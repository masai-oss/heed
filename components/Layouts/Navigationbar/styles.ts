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
  headerStyles: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
    marginInline: "20px",
    // gap: "40%",
  },
  navItems: {
    display: "flex",
    gap: 30,
  },
  displayNone: {
    display: "none",
  },
  logoStyle: {
    color: "#228be6",
  },
  navOptions: {
    display: "flex",
    gap: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  navButtons: {
    paddingBottom: 2,
    boxSizing: "border-box",
    fontSize: 20,
    ":hover": {
      cursor: "pointer",
    },
  },
}));
