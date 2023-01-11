import { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import TestPage from "./Components/TestPage";
import { GlobalStyle } from "./MyStyles";

function App() {
  const [value, setValue] = useState({ jogador1: "", jogador2: "" });
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home value={value} setValue={setValue} />}
          />
          <Route
            path="test"
            element={<TestPage value={value} setValue={setValue} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
