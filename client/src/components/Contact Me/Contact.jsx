import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import emailjs from 'emailjs-com';


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      modal: false,
      isLoading: false,
      errorMessage: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });

    const templateParams = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    emailjs.send('service_tkkqykl', 'template_c5a4zvl', templateParams, 'W4nWKKi0VsLAZ18MC')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.setState({
          name: '',
          email: '',
          message: '',
          modal: true,
          isLoading: false,
          errorMessage: '',
        });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        this.setState({
          modal: true,
          isLoading: false,
          errorMessage: 'Failed to send the message. Please try again.',
        });
      });
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={12} style={{ color: "white", borderRadius: "10px", padding: "20px" }}>
            <h2>Contact</h2>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Write your message here"
                  value={this.state.message}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <Button color="dark" disabled={this.state.isLoading} block>
                {this.state.isLoading ? 'Sending...' : 'Send'}
              </Button>
            </Form>
          </Col>
        </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            {this.state.errorMessage ? "Error" : "Email Sent"}
          </ModalHeader>
          <ModalBody>
            {this.state.errorMessage || "Your message has been sent successfully. I will respond shortly."}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ContactForm;
