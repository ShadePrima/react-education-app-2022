import './App.css';
import React from 'react';
// import Clock from './components/Clock';
// import Comment from './components/Comment';

function App() {
  return (
    <div>
    <Clock />
    <Clock />
    <Clock />
    </div>

  //   // <p>Hello word</p>,
  //   // <Comment
  //   //   date={comment.date}
  //   //   text={comment.text}
  //   //   author={comment.author}
  //   // />
    );

}

class Clock extends React.Component {
  constructor(props) {
      super(props)
      this.state = {date: new Date()}
  }

  componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
      clearInterval(this.timerID)
  }

  tick() {
      this.setState({
          date: new Date()
      })
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

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };


export default App;
