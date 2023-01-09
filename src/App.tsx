import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import TestPage from "./Components/TestPage";
import { GlobalStyle } from "./MyStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
