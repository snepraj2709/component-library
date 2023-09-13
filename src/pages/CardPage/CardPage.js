import {
  Code,
  Heading,
  Text,
  Wrapper,
  CardWithShadow,
} from "../../components/index";

export function CardPage() {
  return (
    <Wrapper>
      <Heading text="Card component" />
      <Text text="Card generates a small badge to the top-right of its child(ren)." />
      <CardWithShadow />
      <Heading text="Home to use Card Component" />
      <Code />
    </Wrapper>
  );
}
