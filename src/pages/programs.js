import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Container } from "react-grid-system"
import { Jumbotron, ButtonGroup } from "react-bootstrap"
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import { Row, Col } from "react-bootstrap"
import SolutionImgTwo from "../images/desktop.jpg"
import Basketball from "../images/basketball.jpg"
import Volleyball from "../images/volley_girls.jpg"
import Lacrosse from "../images/lacrosse.jpg"
import Track from "../images/ track.jpg"
import { ExternalLink } from "react-external-link"

const Programs = () => {
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
          <p>Programs</p>
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

      <Container
        fluid
        style={{
          paddingTop: "0px",
        }}
      >
        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              paddingRight: "0px",
              paddingLeft: "0px",
              backgroundImage: `url(${SolutionImgTwo})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              color: "white",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          ></Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              backgroundColor: "#992168",
              color: "white",
              width: "50%",
              padding: "4rem",
            }}
          >
            <p>
              We need you. You can help solve the play and diversity challenge
              in Marin County. Give a gift that promotes a more inclusive and
              equitable Marin community by making a donation that provides
              athletic and extracurricular activities for Marin City Youth while
              creating a more diverse peer group for participating young people
              across Marin County.
            </p>
            <ButtonGroup
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <ExternalLink href="https://secure.lglforms.com/form_engine/s/DyJ9AqAOL3OOLxrGV7s-mg">
                <button
                  style={{
                    width: "15rem",
                    height: "2.5rem",
                  }}
                >
                  Donate Today!
                </button>
              </ExternalLink>

            </ButtonGroup>
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          marginTop: `50px`,
        }}
      >
        <Container>
          <h2 className="text-center">Seasonal Sports</h2>
        </Container>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={Basketball} />
            <Card.Body>
              <Card.Title>Basketball</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Volleyball} />
            <Card.Body>
              <Card.Title>Girl’s Volleyball</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Lacrosse} />
            <Card.Body>
              <Card.Title>Lacrosse</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Track} />
            <Card.Body>
              <Card.Title>Track & Field</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      <Container
        style={{
          marginTop: `100px`,
          marginBottom: `100px`,
        }}
      >
        <Container>
          <h2 className="text-center">Extracurricular Activities</h2>
          <p className="text-center">Field Trips</p>
          <p className="text-center">Mountain Biking</p>
          <p className="text-center">Skateboarding</p>
          <p className="text-center">Social Justice</p>
          <p className="text-center">
            Sports Clinics, often with national athletes
          </p>
          <p className="text-center">Summer Camps</p>
          <p className="text-center">Swim Lessons </p>
          <p className="text-center">And many more!</p>
        </Container>
      </Container>

      <Footer />
    </>
  )
}

export default Programs
