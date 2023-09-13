import { Sidebar, Header } from "../index";

export function Wrapper({ children }) {
  return (
    <div className="wrapper-container">
      <Header />
      <div className="wrapper-main-container">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
}
