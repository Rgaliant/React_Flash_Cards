import React, { Component } from 'react';
import { Container, Header, Button, Icon } from "semantic-ui-react";
import Contacts from './Contacts'
import ContactForm from "./ContactForm";

class App extends Component {
  state = {
    contacts: [
      { id: 1, question: "What is React?", answer: "Answer", },
      { id: 2, question: "What is Ruby", answer: "Answer", },
      { id: 3, question: "What is JS", answer: "Answer", },
    ],
  }
  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addContact = (contactData) => {
    let contact = { id: this.getId(), ...contactData, };
    this.setState({ contacts: [contact, ...this.state.contacts], });
  };

  removeContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if (contact.id !== id)
        return contact
    });
    this.setState({ contacts, });
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm, })
  }


  render() {
    return (
      <Container textAlign="center" style={{ paddingTop: "25px" }}>
      <Icon name ="huge address book outline" />
        <Header as="h1">React Flash Cards</Header>
        <hr />
        <br />
        <div>
          <Button icon color="blue" onClick={this.toggleForm}>
           <Icon name="angle double down" />
           Add a New Card
          </Button>
          { this.state.showForm ? <ContactForm add={this.addContact} /> : null }
        </div>
        <br />
        <Contacts
        contactList={this.state.contacts} 
        remove={this.removeContact} 
        />
      </Container>
    );
  }
}

export default App;

