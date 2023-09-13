import {
  Wrapper,
  Heading,
  Text,
  PrimaryButton,
  Code,
} from "../../components/index";

export function ButtonPage() {
  return (
    <Wrapper>
      <Heading text="Button component" />
      <Text text="Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:" />
      <ul>
        <li>Modal windows</li>
        <li>Forms</li>
        <li>Cards</li>
        <li>Toolbars</li>
      </ul>
      <PrimaryButton text="Primary Button" />
      <Heading text="Home to use Button Component" />
      <Code />
    </Wrapper>
  );
}
