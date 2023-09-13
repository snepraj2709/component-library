import "./Header.css";
import { PrimaryButton } from "../index";

export function Header() {
  return (
    <header className="header-container">
      <h3 className="header-logo-text">CSS Library</h3>
      <div className="header-searchBar">
        <input />
        <button>Search</button>
      </div>
      <div className="header-button-container">
        <PrimaryButton text="Home" link="/" />
        <PrimaryButton text="Components" link="/components" />
      </div>
    </header>
  );
}
