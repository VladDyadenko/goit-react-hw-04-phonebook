import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, changeFilte }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={changeFilte}></Input>
      </Label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilte: PropTypes.func.isRequired,
};

export default Filter;
