import React, { Component } from 'react';

import IphoneBorder from './res/IphoneBorder.png';

class IphoneLayout extends Component {
    render() {
        return (
            <div className="App">
                <img src={IphoneBorder} alt="Iphone" height="850" width="850" />
            </div>
        );
    }
}

export default IphoneLayout;
