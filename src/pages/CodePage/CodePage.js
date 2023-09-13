import { Code, Heading, Text, Wrapper } from "../../components/index";

export function CodePage() {
  return (
    <Wrapper>
      <Heading text="Code component" />
      <Text text="Code generates a small Code to the top-right of its child(ren)." />
      <Code />
      <Heading text="Home to use Code Component" />
    </Wrapper>
  );
}
