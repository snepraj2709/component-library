import "./AvatarPage.css";
import { Avatar, Heading, Text, Wrapper, Code } from "../../components/index";

export function AvatarPage() {
  return (
    <Wrapper>
      <Heading text="Avatar component" />
      <Text text="Image avatars can be created by passing standard img props src or srcSet to the component." />
      <Avatar />
      <Heading text="Home to use Avatar Component" />
      <Code />
    </Wrapper>
  );
}
