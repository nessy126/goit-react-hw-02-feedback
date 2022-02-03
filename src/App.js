import { Component } from "react"
import "./App.css"
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import Section from "./components/Section/Section"
import Statystics from "./components/Statystics/Statystics"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    const total = Object.entries(this.state)
      .map((el) => el[1])
      .reduce((acc, el) => acc + el)
    return total
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback()
    const positivePercentage =
      total ? Math.round((this.state.good / total) * 100) : 0 
    return positivePercentage
  }

  counterFeedbacks = (name) => {
    this.setState((prev) =>  {return {[name]: prev[name] + 1}})
  }

  render() {
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    
    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            counterFeedbacks={this.counterFeedbacks}
          />

          <Statystics
            title={"Statystics"}
            optionsWithValues={Object.entries(this.state)}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    )
  }
}

export default App
