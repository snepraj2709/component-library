import "./Components.css";
import { Header, Heading, LinkButton } from "../../components/index";
const allComponents = [
  { name: "Heading", link: "/heading" },
  { name: "Avatar", link: "/avatar" },
  { name: "Alert", link: "/alert" },
  { name: "Badge", link: "/badge" },
  { name: "Button", link: "/button" },
];

export function Components() {
  return (
    <div>
      <Header />
      <div>
        <Heading heading="All Components" />
        <div className="components-card-container">
          {allComponents.map(({ name, link }) => (
            <div key={name} className="component-card">
              <LinkButton text={name} link={link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
