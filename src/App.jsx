import { useState } from "react";
import "./App.css";
import { ModalLayout } from "./layouts/modal/ModalLayout";
import { UserGreeting } from "./components/UserGreeting";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <ModalLayout>
        {/* <UserGreeting /> */}
        <Home />
      </ModalLayout>
    </>
  );
}

export default App;
