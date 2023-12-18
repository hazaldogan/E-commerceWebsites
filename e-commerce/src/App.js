import Header from "./layouts/Header";
import "./App.css";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="App max-sm:max-w-sm">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
