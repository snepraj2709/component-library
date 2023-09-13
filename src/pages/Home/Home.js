import { Header, Heading, PrimaryButton, Text } from "../../components/index";
import "./Home.css";

export function Home() {
  return (
    <div>
      <Header />
      <div className="home-content">
        <Heading text="Component Library" />
        <Text text="A collection of frequnetly used components" />
        <PrimaryButton text="Get Started" link="./components" />
      </div>
    </div>
  );
}
