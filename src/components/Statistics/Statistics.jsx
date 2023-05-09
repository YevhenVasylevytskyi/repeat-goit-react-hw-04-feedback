import Notification from "components/Notification/Notification";
import PropTypes from "prop-types";
import s from "./Statistics.module.css"


function Statistics({ good, neutral, bad, total, positivePercentage }) {
  
  return (
    <>
      {total === 0
        ? <Notification message="There is no feedback" />
        : <ul className={s.List}>
        <li className={s.Item}>Good: <span>{good}</span></li>
        <li className={s.Item}>Neutral: <span>{neutral}</span></li>
        <li className={s.Item}>Bad: <span>{bad}</span></li>
        <li className={s.Item}>Total: <span>{total}</span></li>
        <li className={s.Item}>Positive Feedback: <span>{
          Number.isNaN(positivePercentage)
            ? 0
            : positivePercentage} %</span>
        </li>
      </ul>
      }      
    </>    
  )
};

Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;