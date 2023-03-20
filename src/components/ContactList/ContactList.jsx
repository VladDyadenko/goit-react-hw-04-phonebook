import PropTypes from 'prop-types';
import {AiOutlinePhone } from "react-icons/ai";
import {FaTrashAlt } from "react-icons/fa";
import { Box, Btn, ContactName, ContactNumber, List } from './ContactList.styled';


const ContactList =({contactList, hendleDeleteContact})=>{
const svgStylePhon = {fill:'#006400', marginRight: '8px'}
const svgStyleUser = {fill:'#FF4500', marginLeft: '8px'}
    return (<Box> 
        {contactList.map(({id,name,number}) => (
          <List key={id}>
            <AiOutlinePhone style={svgStylePhon} size={20}></AiOutlinePhone>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <>
            <Btn type="button" onClick={()=>{hendleDeleteContact(id)}}>
            Delete <FaTrashAlt style={svgStyleUser} size={15}></FaTrashAlt>
            </Btn>
            </>
          </List>
        ))}
    </Box>);
  
};

ContactList.propTypes ={
    contactList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    hendleDeleteContact: PropTypes.func.isRequired,
    
};

export default ContactList;