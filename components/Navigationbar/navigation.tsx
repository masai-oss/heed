import React, { useState } from "react";
import {
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  Title,
  Avatar,
} from "@mantine/core";
import useStyles from "./styles";

export default function Navigation() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles();
  return (
    <Header height={70} p="md">
      <Box className={classes.headerStyles}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            className={classes.headerColor}
            mr="xl"
          />
        </MediaQuery>
        <Title>
          <Text inherit variant="gradient" component="span">
            {"< Heed />"}
          </Text>
        </Title>
        <Box className={classes.profileStyle}>
          <Avatar size={50} src={null} alt="no profile image" color="indigo" radius="xl" />
        </Box>
      </Box>
    </Header>
  );
}



