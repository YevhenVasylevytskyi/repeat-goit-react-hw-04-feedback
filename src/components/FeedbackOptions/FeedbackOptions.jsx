import PropTypes from "prop-types";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(el => {

        return (
          <button
            type="button"            
            key={el}
            onClick={() => onLeaveFeedback(el)}
          >
            {capitalizeFirstLetter(el)}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.protoType = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;