import PropTypes from "prop-types";

const CategoryBtn = ({category}) => {
  return (
    <button className="text-white px-6 py-2 bg-soft_blue rounded capitalize">{category.name}</button>
  )
}

CategoryBtn.propTypes = {
	category: PropTypes.shape({
		name: PropTypes.string,
	}).isRequired,
};

export default CategoryBtn