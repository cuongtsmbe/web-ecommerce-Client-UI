import React, { PureComponent } from 'react';
import MainHeader from './components/UI/Header/Main';
import TopHeader from './components/UI/Header/Top'

class App extends PureComponent {
    render() {
        return (
            <div>
              <TopHeader/>
              <MainHeader/>
            </div>
        );
    }
}

export default App;