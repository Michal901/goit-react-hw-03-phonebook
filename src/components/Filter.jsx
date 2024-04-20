import PropTypes from 'prop-types';

const Filter = ({ filterValue, setFilterValue }) => {
  return (
    <div>
      <div>
        <label htmlFor="filter">Find contact by name:</label>
      </div>
      <input
        type="text"
        id="filter"
        value={filterValue}
        onChange={e => setFilterValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  setFilterValue: PropTypes.func.isRequired,
};

export default Filter;
