import { NavLink } from "react-router-dom";
import "./Button.css";

export function FloatingActionButton({ text, link }) {
  return <NavLink to={link}>{text}</NavLink>;
}
