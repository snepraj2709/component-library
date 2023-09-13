import React from "react";
import { Wrapper, Heading, Text, Alert, Code } from "../../components";

export function AlertPage() {
  return (
    <Wrapper>
      <Heading text="Alert component" />
      <Text text="The alert offers four severity levels that set a distinctive icon and color." />
      <Alert />
      <Heading text="Home to use Alert Component" />
      <Code />
    </Wrapper>
  );
}
