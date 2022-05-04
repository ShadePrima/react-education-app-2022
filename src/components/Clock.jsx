import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));



class Clock extends React.Component {
    render () {
        return (
            <div>
                <h1>Hellow, word!</h1>
                <h2>It is {this.props.data.toLocaleTimeString()}.</h2>            
            </div>
        );
    }
}

function tick () {
    root.render (<Clock date={new Date()} />)
}

setInterval(tick, 1000)

export default Clock;