import PropTypes from "prop-types";

import s from "./Section.module.css"

function Section({ title, children }) {
  return (
    <>
      <h2 className={s.Title}>{title}</h2>
      {children}
    </>
  );
};

Section.protoType = {
  title: PropTypes.string,
};

export default Section;