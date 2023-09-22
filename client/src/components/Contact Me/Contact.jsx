import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario por correo electrónico
    console.log('Formulario enviado:', this.state);
    // Limpia el formulario
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 50 }} style={{color: "white", borderRadius: "10px", padding: "20px",}}>
            <h2>Contacto</h2>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Nombre</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tu nombre"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Correo Electrónico</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="tu@email.com"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">Mensaje</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Escribe tu mensaje aquí"
                  value={this.state.message}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <Button color="dark">Enviar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactForm;