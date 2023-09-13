import { Code, Heading, Text, Wrapper } from "../../components/index";

export function TextPage() {
  return (
    <Wrapper>
      <Heading text="Text component" />
      <Text text="Text generates a small badge to the top-right of its child(ren)." />
      <Heading text="How to use Text Component" />
      <Code />
    </Wrapper>
  );
}
