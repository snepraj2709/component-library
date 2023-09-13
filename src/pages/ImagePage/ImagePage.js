import {
  Code,
  Heading,
  Text,
  Wrapper,
  RoundImage,
  ResponsiveImage,
} from "../../components/index";

export function ImagePage() {
  return (
    <Wrapper>
      <Heading text="Image component" />
      <Text text="Image generates a small badge to the top-right of its child(ren)." />
      <RoundImage />
      <ResponsiveImage />
      <Heading text="Home to use Image Component" />
      <Code />
    </Wrapper>
  );
}
