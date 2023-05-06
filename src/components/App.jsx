import { Component } from "react";
import Statistics from "./Statistics/Statistics.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Section from "./Section/Section.jsx";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,     
    };
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 1000) / 10
    );
  }

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    const keys = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">

          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onLeaveFeedback}
          />        

        </Section>

        <Section title="Statistics">

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          
        </Section>

      </div>
        
    );
  }
}