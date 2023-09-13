import { Header, PrimaryButton } from "../../components/index";
import "./Home.css";

export function Home() {
  return (
    <div>
      <Header />
      <div className="home-content">
        <p className="home-text-content">My Component Library</p>
        <PrimaryButton text="Get Started" link="./components" />
      </div>
    </div>
  );
}
