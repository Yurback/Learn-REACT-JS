import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.myClick = this.myClick.bind(this);
    }

    myClick() {
        document.getElementsByClassName('wrapper')[0].style.backgroundColor = "#F9F5A6";
    }

    render() {
        return (
            <button onClick={this.myClick} className="Clicker">Изменить</button>
        )
    }
}

export default Button;