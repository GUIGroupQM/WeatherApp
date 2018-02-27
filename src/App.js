import React, { Component } from 'react';
import './App.css';
import HeaderSection from './Components/HeaderSection';

//Main class. Keep all components separate in the components folder.
class App extends Component {

    state = {
        studentID: "StudentID"
    }

    //Changes the value of studentID in state.
    switchID(value) {
        this.setState({ studentID: value })
    }


    render() {
        return (
            //All components go inside this div.
            <div className="App">
                <HeaderSection studentID={this.state.studentID} onClick={(e) => { this.switchID("test"); }} />
            </div>
        );
    }
}

export default App;
