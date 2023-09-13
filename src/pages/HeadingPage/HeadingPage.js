import { Code, Heading, Text, Wrapper } from "../../components/index";

export function HeadingPage() {
  return (
    <Wrapper>
      <Heading text="Heading component" />
      <Text text="Heading generates a small badge to the top-right of its child(ren)." />
      <Heading />
      <Heading text="Home to use Heading Component" />
      <Code />
    </Wrapper>
  );
}
