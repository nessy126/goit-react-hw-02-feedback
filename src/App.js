import { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statystics from './components/Statystics/Statystics';

class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  }
  render() {
    return (
      <div className="App">
        <FeedbackOptions />
        <Statystics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    )
  }
}

export default App;
