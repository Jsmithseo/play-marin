import React, { useReducer } from "react"
import styles from "./form.module.css"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const ContactForm = () => {
  return (
    <>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="name" />
          </Col>
          <Col>
            <Form.Control placeholder="Email" />
          </Col>
          <Col>
            <Form.Control placeholder="subject" />
          </Col>
        </Form.Row>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows="3" placeholder="Message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default ContactForm
