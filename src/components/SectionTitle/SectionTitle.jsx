import PropTypes from "prop-types";


const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="md:w-4/12 my-8 mx-auto text-center">
      <p className="text-rose-500 mb-2">--- {subHeading} ---</p>
      <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  )
}

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle