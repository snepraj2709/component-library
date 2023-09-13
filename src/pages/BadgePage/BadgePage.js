import { Wrapper, Heading, Text, Badge, Code } from "../../components/index";

export function BadgePage() {
  return (
    <Wrapper>
      <Heading text="Badge component" />
      <Text text="Badge generates a small badge to the top-right of its child(ren)." />
      <Badge />
      <Heading text="Home to use Badge Component" />
      <Code />
    </Wrapper>
  );
}
