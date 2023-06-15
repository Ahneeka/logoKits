import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
