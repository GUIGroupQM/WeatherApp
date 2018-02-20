import React, { Component } from 'react';

import IphoneLayout from './Components/IphoneLayout'

import './App.css';

//Main class. Keep all components separate in the components folder.
class App extends Component {
    render() {
        return (
            //All components go inside this div.
            <div className="App">
                <IphoneLayout className="Iphone" />
            </div>
        );
    }
}

export default App;
