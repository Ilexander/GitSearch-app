import { useAppSelector } from "../../reducer/hooks";
import { List } from "../List/List";
import { Loader } from "../sideComponents/Loader";
import { SearchInput } from "./SearchInput";
import "./style.css";

function Search() {
  const windowStatus = useAppSelector((state) => state.window);

  return (
    <div
      style={{
        display: windowStatus.currentWindow === "search" ? "block" : "none",
      }}
    >
      <h1>GitHub Search</h1>
      <SearchInput></SearchInput>
      <Loader></Loader>
      <List></List>
    </div>
  );
}

export { Search };
