import React from 'react';
import ScreensRoot from './screens/Root';
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
        <ScreensRoot />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;