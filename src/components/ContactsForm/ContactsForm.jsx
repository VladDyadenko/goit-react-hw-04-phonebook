import { Component } from 'react';
import {FaUserPlus } from "react-icons/fa"
import PropTypes from 'prop-types';
import { Btn, Form, Input, Label } from './ContactsForm.styled';


class ContactForm extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    }

    handlInputChange= (e)=>{

        const {name, value} = e.currentTarget;
    
        this.setState({[name]: value})
    
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        
        const {onSubmit} = this.props

        onSubmit(this.state);

        this.reset()

    }

    reset = ()=>{
        this.setState({name:'', number:''})
    }

    render(){
     const {name, number}= this.state;
     const  iconStyles = {fill:'#FFFFFF', marginLeft: "10px"}


        return (
            <Form onSubmit={this.handleSubmit} >
                <Label>Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value= {name}
                        onChange={this.handlInputChange}
                    />      
                </Label>
                <Label>Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value= {number}
                        onChange={this.handlInputChange}
                    />      
                </Label>
                <Btn type="submit">
                Add contact
                <FaUserPlus style={iconStyles} size={20}></FaUserPlus></Btn>
            </Form>


        )



    };

};

export default ContactForm;