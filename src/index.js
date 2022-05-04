import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render (<Clock />)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );



class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillMount() {
        clearInterval(this.timerID)
    }

    render () {
        return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
          );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<Clock />)
  