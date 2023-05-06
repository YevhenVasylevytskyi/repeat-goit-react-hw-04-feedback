import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Section.protoType = {
  title: PropTypes.string,
};

export default Section;