import React from 'react';
import ScreenHome from './screens/Home';
import TopHeader from './components/UI/Header/Top';
import MainHeader from './components/UI/Header/Main';
import Navigation from './components/UI/Header/Navigation';
import Footer from './components/UI/Footer';


function App() {
  return (
    <div id="wapper">
      <div id="header">
        <TopHeader/>
        <MainHeader />
        <Navigation />
      </div>
      <div id="content">
        <ScreenHome />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;