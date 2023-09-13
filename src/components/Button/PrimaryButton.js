import { NavLink } from "react-router-dom";
import "./Button.css";

export function PrimaryButton({ text, link }) {
  return (
    <NavLink id="button" to={link}>
      {text}
    </NavLink>
  );
}
