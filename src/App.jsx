import "./App.css";
import { Home } from "./components/Home";
import GameDataProvider from "./contexts/gameDataContext";
import { DefaultLayout } from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <GameDataProvider>
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </GameDataProvider>
    </>
  );
}

export default App;
