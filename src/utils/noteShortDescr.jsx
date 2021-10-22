import PropTypes from "prop-types"

const shortenDescr = (fullDescr) => (
    fullDescr.slice(0, 20) + "..."
)

shortenDescr.PropTypes = {
    fullDescr: PropTypes.string
}

export default shortenDescr