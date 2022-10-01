import GlobalStyle from "./Styles/Global";
import "./App.css";

import Home from "./Page/Home";
import Header from "./Components/Header";

function App() {
  /* console.log(document.documentElement.scrollTop); */

  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />;
    </>
  );
}

export default App;
