import PropTypes from 'prop-types';
import { Info } from './Massege.styled';

const Massege =({info})=>{
    return(
      <>
          <Info>{info}</Info>
      </>
    )  
      
      
  
  };

  Massege.propTypes ={
    info: PropTypes.string.isRequired
  }
  
  export  default Massege;