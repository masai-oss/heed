import React from "react";
import { Navbar, Text } from "@mantine/core";
import { drawerProps } from "./navigation.type";
function Drawer(props: drawerProps) {
  const { open } = props;
  return (
    <Navbar
      width={{
        sm: 300,
        lg: 400,
        base: 300,
      }}
      height={"100vh"}
      p="xs"
    >
      <Navbar.Section>{/* Header with logo */}</Navbar.Section>
      <Navbar.Section grow mt="md">
        {
          /* Links sections */
          <>
            <Text>Polls</Text>
            <Text>Vots</Text>
            <Text>Word Cloud</Text>
            <Text>MCQ</Text>
          </>
        }
      </Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
}

export default Drawer;






