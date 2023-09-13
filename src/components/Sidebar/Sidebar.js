import "./Sidebar.css";
import { LinkButton } from "../../components/index";
import { allLinks } from "../../utils/constants";

export function Sidebar() {
  return (
    <div className="sidebar-container">
      {allLinks.map(({ routeName, route }) => (
        <LinkButton link={route} text={routeName} key={route} />
      ))}
    </div>
  );
}
