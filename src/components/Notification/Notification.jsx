import PropTypes from "prop-types";

import s from "./Notification.module.css"

function Notification({ message }) {
  
  return (
    <p className={s.Notification}>
      {message}      
    </p>    
  )
};

Notification.protoType = {
  message: PropTypes.string,
};

export default Notification;