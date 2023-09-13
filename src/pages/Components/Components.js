import "./Components.css";
import { Header, Heading, LinkButton } from "../../components/index";
import { allLinks } from "../../utils/constants";

export function Components() {
  return (
    <div>
      <Header />
      <div>
        <Heading text="All Components" />
        <div className="components-card-container">
          {allLinks.map(({ routeName, route }) => (
            <div key={routeName} className="component-card">
              <LinkButton text={routeName} link={route} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
