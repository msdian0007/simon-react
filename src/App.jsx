import "./App.css";
import { Home } from "./components/Home";
import GameDataProvider from "./contexts/gameDataContext";

function App() {
  return (
    <>
      <GameDataProvider>
        <Home />
      </GameDataProvider>
    </>
  );
}

export default App;
