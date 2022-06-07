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
  Button,
} from "@mantine/core";
import { createNavStyles as useStyles } from "./styles";
import { navProps } from "./navigation.type";
import Drawer from "./Drawer";

export default function Navigation(props: navProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles();
  const { isLogedin } = props;

  return (
    <>
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
              heed
            </Text>
          </Title>
          <Box className={classes.navItems}>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Box className={classes.navOptions}>
                <Text className={classes.navButtons} inherit variant="text" component="div">
                  Polls
                </Text>
                <Text className={classes.navButtons} inherit variant="text" component="div">
                  Vots
                </Text>
                <Text className={classes.navButtons} inherit variant="text" component="div">
                  Word Cloud
                </Text>
                <Text className={classes.navButtons} inherit variant="text" component="div">
                  MCQ
                </Text>
              </Box>
            </MediaQuery>
            <Box>
              {isLogedin ? (
                <Avatar size={50} src={null} alt="no profile image" color="indigo" radius="xl" />
              ) : (
                <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
                  Login
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Header>
      {opened ? <Drawer open={opened} /> : null}
    </>
  );
}
