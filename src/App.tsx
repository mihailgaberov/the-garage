import React from 'react';
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import MainView from "./components/MainView";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <MainView />
    </>
  );
}

export default App;
