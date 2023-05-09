import { useState } from "react";
import Statistics from "./Statistics/Statistics.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Section from "./Section/Section.jsx";

export function App() {

  const options = ["good", "neutral", "bad"]
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = (el) => {
    
    switch (el) {
      case "good":
        setGood(good + 1)
        break
      case "neutral":
        setNeutral(neutral + 1)
        break
      case "bad":
        setBad(bad + 1)
        break
      default:
        return
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return (
      Math.round((good / countTotalFeedback()) * 1000) / 10
    );
  }

  return (
    <div>
      <Section title="Please leave feedback">

        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        /> 

      </Section>

      <Section title="Statistics">

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
          
      </Section>

    </div>
        
  );
}