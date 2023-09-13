import { NavLink } from "react-router-dom";
import "./Button.css";

export function LinkButton({ text, link }) {
  return (
    <NavLink to={link} className="linkButton-text">
      {text}
    </NavLink>
  );
}
