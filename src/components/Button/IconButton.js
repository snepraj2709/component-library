import { NavLink } from "react-router-dom";
import "./Button.css";

export function IconButton({ text, link }) {
  return <NavLink to={link}>{text}</NavLink>;
}
