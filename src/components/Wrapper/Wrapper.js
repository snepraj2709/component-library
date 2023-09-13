import { Sidebar, Header } from "../index";

export function Wrapper({ children }) {
  return (
    <div>
      <Header />
      <div
        className="wrapper-main-container"
        style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
