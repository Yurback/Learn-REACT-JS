import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './button';
import * as serviceWorker from './serviceWorker';

// function Greet(props) {

//     let phrase = "World"; 

//     return(
//         <h1>Hello {props.phrase} my name is {props.name}</h1>
//     )
// }

// function GreetAll() {
//     return(
//         <div>
//         <Greet phrase='World' name='Yuri'/>
//         <Greet phrase='World' name='Anna'/>
//         <Greet phrase='World' name='Maxim'/>
//         </div>
//     )
// }

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Clock/>
                <Button/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
