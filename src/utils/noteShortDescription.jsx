import PropTypes from "prop-types";

const shortenDescription = (fullDescription) =>
  fullDescription.slice(0, 20) + "...";

shortenDescription.PropTypes = {
  fullDescr: PropTypes.string,
};

export default shortenDescription;
