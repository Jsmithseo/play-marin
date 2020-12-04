import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import ContactForm from "../components/form"
import { Jumbotron, Container } from "react-bootstrap"

const Contact = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Header />

      <Jumbotron
        className="text-center"
        fluid
        style={{
          backgroundColor: "white",
          marginTop: `50px`,
          marginBottom: `50x`,
        }}
      >
        <Container>
          <p>Contact Us</p>
          <h1>PLAY MARIN</h1>
          <div
            style={{
              margin: "auto",
              backgroundImage: "linear-gradient(to right, #558EDE, #6514AF)",
              height: "10px",
            }}
          ></div>
        </Container>
      </Jumbotron>
      <p className="text-center">+1 (415) 686-5045</p>
      <p className="text-center">PO Box 530, Sausalito, California 94965</p>
      <p className="text-center">We look forward to hearing from you.</p>
      <Container>
        <ContactForm />
      </Container>

      <Footer />
    </>
  )
}

export default Contact
