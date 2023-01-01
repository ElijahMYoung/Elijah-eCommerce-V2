import "./App.css";

import "./css/Home.css";
import Home from "./components";
import Products from "./components/products";
import Contact from "./components/contact";
function App() {
  return (
    <div className="App">
      <Home />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
