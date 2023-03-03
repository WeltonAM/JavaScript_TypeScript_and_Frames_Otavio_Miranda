import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

const Form = ({ novaTarefa, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" onChange={handleChange} value={novaTarefa} />

      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};

export default Form;
