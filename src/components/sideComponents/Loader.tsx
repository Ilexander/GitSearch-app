import { useAppSelector } from "../../reducer/hooks";
import "./style.css";

function Loader() {
  const { status } = useAppSelector((state) => state.data);

  return (
    <div
      className="clock-loader"
      style={{ display: status === "fulfilled" ? "none" : "flex" }}
    ></div>
  );
}

export { Loader };
