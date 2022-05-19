import "./style/style.css";
import { Profile } from "./components/Profile/Profile";
import { Search } from "./components/Search/Search";

function App() {
  return (
    <div className="search">
      <Search></Search>
      <Profile></Profile>
    </div>
  );
}

export default App;
